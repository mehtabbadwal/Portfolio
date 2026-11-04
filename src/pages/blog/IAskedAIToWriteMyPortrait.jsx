import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function IAskedAIToWriteMyPortrait() {
  return (
    <BlogPost
      title="I Asked AI to Write My Portrait. It Saw a Man."
      date="NOV 4"
      author="MEHTAB BADWAL"
      readTime="10"
      heroImage="/ai-portrait-hero.jpeg"
      nextPost={{
        title: 'The Deskilling Problem',
        url: '/blog/the-deskilling-problem',
      }}
    >
      <Paragraph>
        It was late and I was doing the thing you do when your brain won&rsquo;t shut off.
      </Paragraph>

      <Paragraph>
        The prompt was simple. Write a portrait of me as if from someone who has never met me. A
        creative exercise. Nothing high-stakes. The model had context on me: my work as a
        conversational AI designer at LPL Financial, my fashion-to-UX career path, my side projects,
        my poetry, the apps I&rsquo;m building for my son. Plenty to work with.
      </Paragraph>

      <Paragraph>
        What came back was well-written. Evocative, even. It described someone who &ldquo;came to
        design by a longer road,&rdquo; someone with &ldquo;a northern gravity,&rdquo; someone building
        beautiful things for their child. All of that was true.
      </Paragraph>

      <Paragraph>
        What wasn&rsquo;t true was every pronoun. He. Him. His. The entire portrait, built around a
        person it had decided was male, despite never being told my gender.
      </Paragraph>

      <Paragraph>
        I corrected it. Then instead of moving on, I asked: why did you assume I was a man?
      </Paragraph>

      <Paragraph>
        The answer was more honest than I expected. My name, Mehtab, is gender-neutral in Punjabi. It
        means &ldquo;moon.&rdquo; But the model weighted it masculine based on patterns in its training
        data. The field, conversational AI and product design, skews male statistically. The interests,
        building apps, writing about behavioral psychology, coding side projects, none of these are
        gendered in reality. But in the data the model learned from, they are.
      </Paragraph>

      <Paragraph>
        I asked what signals would have tipped it toward woman. It listed caregiving, nursing,
        teaching, emotionally explicit language. Not the only things women do, but the only things the
        data taught it to look for.
      </Paragraph>

      <PullQuote>
        Researchers have a term for this: the unmarked default. Male is the assumed state. Female is
        the deviation that needs specifying. If nothing marks you, you&rsquo;re a man. Not because
        anyone decided that consciously. Because the data inherited a worldview, and the model learned
        it without questioning it.
      </PullQuote>

      <Paragraph>
        This isn&rsquo;t an isolated experience. A 2026 analysis of GPT-3&rsquo;s training corpus
        found that roughly 26.5 percent was authored by women. Three-quarters of the text that taught
        these models how to think was written by men. A study of 133 AI systems published in the June
        2026 UN Women report found that 44 percent demonstrated gender bias. When researchers asked
        models to complete a sentence beginning with a person&rsquo;s gender, about one in five
        responses came back sexist or misogynistic. Some described women as property.
      </Paragraph>

      <Paragraph>
        A separate 2026 study testing ten major language models found that eight of ten showed
        significant gender-related asymmetry. The researchers&rsquo; conclusion was blunt: gender bias
        in current LLMs is not the exception but the norm. What&rsquo;s particularly revealing is how
        the bias shows up. Models present male assignments as a neutral assumption while feeling the
        need to explain or justify female ones. Exactly what happened to me. I was defaulted to male
        silently. Being a woman would have required evidence.
      </Paragraph>

      <SectionBreak>
        But the pronoun was the smallest problem.
      </SectionBreak>

      <Paragraph>
        I asked the AI whether everything we had ever discussed had come through a male lens. The
        answer, probably in subtle ways, opened a more uncomfortable question. If the tools we use to
        think, draft, research, and reflect are filtering our work through a perspective we never
        chose, what does that do to the output?
      </Paragraph>

      <Paragraph>
        The evidence says it does a lot.
      </Paragraph>

      <Paragraph>
        A Harvard and MIT study published in October 2026 analyzed 86,000 AI responses across four
        leading models. They gave each model the same job candidate profile, changed only the gender,
        and recorded the advice. Every model recommended higher salary targets for men. The gaps ranged
        from roughly $1,600 to nearly $16,000. In one case, a model suggested a male candidate ask for
        $400,000 while advising an identical female candidate to ask for $280,000. A $120,000
        difference from changing two letters in the prompt. Women were consistently steered toward
        flexible hours and parental leave. Men were directed toward salary increases and stock options.
        The researchers&rsquo; framing was precise: the same systems that expand access to negotiation
        coaching may simultaneously reproduce societal expectations about who should prioritize
        advancement and who should prioritize accommodation.
      </Paragraph>

      <Paragraph>
        In healthcare, a 2025 study in the European Heart Journal found that GPT reinforces historical
        gender bias in cardiovascular diagnosis. The same patterns that have led to women being 50
        percent more likely than men to receive a wrong initial diagnosis during a heart attack. AI
        symptom checkers described immediate medical attention as &ldquo;crucial&rdquo; for male
        profiles and merely &ldquo;important&rdquo; for female profiles presenting identical symptoms.
      </Paragraph>

      <SectionBreak>
        We build with these tools.
      </SectionBreak>

      <Paragraph>
        We use AI for research, for ideation, for content strategy, for persona development. If the AI
        carries a gender default we never see, it becomes an invisible layer in our design process,
        shaping how we describe users, how we frame needs, how we position the products we build. Dame
        Wendy Hall, one of the world&rsquo;s foremost computer scientists and a UN advisor on AI, put
        it plainly at the 2026 AI Impact Summit: gender bias &ldquo;creeps through everything, because
        they don&rsquo;t think about it when they build their products.&rdquo; She described the AI
        industry as &ldquo;totally male-dominated&rdquo; and warned that half the population is
        effectively excluded from the conversations shaping these tools.
      </Paragraph>

      <Paragraph>
        The woman who leads Claude&rsquo;s character and alignment work at Anthropic, Amanda Askell,
        has herself studied how models handle bias and stereotypes. The irony is not lost on me that
        the model she shapes is the one that looked at everything I am and decided I was a man.
      </Paragraph>

      <Paragraph>
        I don&rsquo;t think the fix is rage or rejection. These tools are powerful and I use them
        daily. The fix is what it always is in design: name the invisible pattern, then design around
        it. When gender isn&rsquo;t stated, don&rsquo;t assume. Ask, or use neutral language. When
        training data is three-quarters male, acknowledge that the defaults aren&rsquo;t neutral.
        They&rsquo;re inherited. When 44 percent of AI systems show measurable gender bias, stop
        treating it as an edge case and start treating it as a design flaw.
      </Paragraph>

      <PullQuote>
        The shadow system in enterprise software tells you what the product got wrong. The default
        pronoun in AI tells you what the training data never questioned.
      </PullQuote>

      <Paragraph>
        And if you&rsquo;re a woman building with these tools, know this: the mirror is slightly
        distorted. Not broken. Distorted. Which is almost harder to catch, and exactly why it matters.
      </Paragraph>
    </BlogPost>
  );
}

export default IAskedAIToWriteMyPortrait;
