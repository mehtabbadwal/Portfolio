exports.handler = async (event) => {
  console.log('🚀 Function called');
  console.log('Method:', event.httpMethod);

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };

  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    console.log('✅ OPTIONS request');
    return { statusCode: 200, headers, body: '' };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    console.log('❌ Method not allowed:', event.httpMethod);
    return {
      statusCode: 405,
      headers,
      body: JSON.stringify({ error: 'Method not allowed: ' + event.httpMethod })
    };
  }

  try {
    console.log('📝 Parsing request...');
    const { messages, system, max_tokens } = JSON.parse(event.body);

    if (!process.env.ANTHROPIC_API_KEY) {
      throw new Error('ANTHROPIC_API_KEY not configured');
    }

    console.log('🤖 Calling Anthropic API...');
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01'
      },
      body: JSON.stringify({
        model: 'claude-sonnet-4-20250514',
        max_tokens: max_tokens || 300,
        system: system,
        messages: messages
      })
    });

    console.log('📡 Anthropic status:', response.status);

    if (!response.ok) {
      const errorText = await response.text();
      console.error('❌ Anthropic error:', errorText);
      throw new Error(`Anthropic API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();
    console.log('✅ Response received');

    return {
      statusCode: 200,
      headers: {
        ...headers,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

  } catch (error) {
    console.error('💥 Error:', error.message);

    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({
        error: error.message,
        type: 'function_error'
      })
    };
  }
};
