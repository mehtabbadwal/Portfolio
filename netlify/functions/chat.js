exports.handler = async (event) => {
  console.log('🚀 Function called!');
  console.log('Method:', event.httpMethod);
  console.log('Path:', event.path);
  console.log('Headers:', JSON.stringify(event.headers, null, 2));

  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': '*',
    'Access-Control-Allow-Methods': '*'
  };

  if (event.httpMethod === 'OPTIONS') {
    console.log('✅ OPTIONS request');
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod === 'POST') {
    console.log('✅ POST request received');

    // Test response without calling Anthropic yet
    return {
      statusCode: 200,
      headers: { ...headers, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        content: [{
          type: 'text',
          text: 'Test response - function is working!'
        }]
      })
    };
  }

  console.log('❌ Method not allowed:', event.httpMethod);
  return {
    statusCode: 405,
    headers,
    body: JSON.stringify({ error: 'Method not allowed: ' + event.httpMethod })
  };
};
