import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function WhenAIShiftsControl() {
  return (
    <BlogPost
      title="When AI Shifts Control"
      date="JAN 16"
      author="MEHTAB BADWAL"
      readTime="5"
      heroImage="/ai-control.svg"
      prevPost={{
        title: 'Stay out of the way',
        url: '/blog/stay-out-of-the-way',
      }}
      nextPost={{
        title: 'Designing for Dignity in Healthcare',
        url: '/blog/designing-for-dignity',
      }}
    >
      <Paragraph>
        As AI becomes more embedded in everyday products, something subtle changes in
        the user experience &mdash; often without being explicitly designed for.
      </Paragraph>

      <Paragraph>
        At first, AI systems feel helpful. They recommend, predict, prioritize, and
        decide faster than we can. They reduce effort and remove uncertainty.
      </Paragraph>

      <Paragraph>
        But over time, I&rsquo;ve noticed a quieter shift.
      </Paragraph>

      <PullQuote>
        Users move from making decisions to confirming them.
      </PullQuote>

      <Paragraph>
        Take LinkedIn&rsquo;s job recommendations, Gmail&rsquo;s suggested replies, or
        Slack&rsquo;s AI-generated message summaries. In each case, the AI presents a
        choice. The user&rsquo;s role becomes simpler: yes or no.
      </Paragraph>

      <Paragraph>
        The system suggests an action. The user clicks &ldquo;Approve.&rdquo; And over
        time, judgment takes a back seat to confidence scores.
      </Paragraph>

      <Paragraph>
        This is where psychology becomes useful.
      </Paragraph>

      <Paragraph>
        There&rsquo;s a concept called locus of control &mdash; the sense of whether
        outcomes are driven by our own actions or by external forces. When users feel in
        control, they tend to feel more engaged, more responsible, and more satisfied
        with outcomes.
      </Paragraph>

      <Paragraph>
        AI systems often shift this balance. Not aggressively. Not all at once. But
        incrementally.
      </Paragraph>

      <Paragraph>
        When systems always &ldquo;know better,&rdquo; users begin to trust the system
        instead of their own reasoning. That can feel efficient &mdash; until something
        goes wrong.
      </Paragraph>

      <Paragraph>
        When errors happen, users are often held accountable for decisions they
        didn&rsquo;t fully feel they made. And that disconnect erodes trust, not just in
        the system, but in the experience as a whole.
      </Paragraph>

      <Paragraph>
        This shows up in the data, too. When users feel powerless, they don&rsquo;t
        leave immediately &mdash; they just stop caring. Engagement drops. They use
        features less. They switch to competitors when something better appears, because
        there&rsquo;s no sense of investment or ownership.
      </Paragraph>

      <PullQuote>
        What&rsquo;s interesting is that dissatisfaction doesn&rsquo;t always come from
        bad outcomes. It comes from loss of agency.
      </PullQuote>

      <Paragraph>
        People want to feel involved in decisions that affect them. They want to
        understand why something is happening. And they want the option to disagree
        &mdash; even if they don&rsquo;t use it often.
      </Paragraph>

      <SectionBreak>
        How I think about this
      </SectionBreak>

      <Paragraph>
        When I&rsquo;m designing with AI, I ask: &ldquo;What happens if the system gets
        this wrong?&rdquo;
      </Paragraph>

      <Paragraph>
        If the answer is &ldquo;nothing much&rdquo; &mdash; automate it. Suggesting a
        playlist? Fine. The stakes are low.
      </Paragraph>

      <Paragraph>
        But if the wrong decision wastes someone&rsquo;s time, money, or trust?
        That&rsquo;s where users need to stay in the loop.
      </Paragraph>

      <Paragraph>
        Hiring decisions. Financial approvals. Content moderation. These shouldn&rsquo;t
        feel like they&rsquo;re happening to someone.
      </Paragraph>

      <Paragraph>
        I also look for decisions that teach something. When systems do everything,
        users stop learning. They lose skills they might need when the AI isn&rsquo;t
        available. Navigation is the obvious example, but it&rsquo;s true in creative
        tools too &mdash; if the AI always suggests the layout, designers stop
        developing their own instincts.
      </Paragraph>

      <Paragraph>
        The goal isn&rsquo;t to avoid automation. It&rsquo;s to automate in ways that
        make people feel capable, not dependent.
      </Paragraph>

      <Paragraph>
        This creates a real design challenge. Automation improves efficiency. Agency
        sustains trust.
      </Paragraph>

      <Paragraph>
        Designing AI experiences isn&rsquo;t about choosing one over the other.
        It&rsquo;s about deciding where humans should stay in control, and where systems
        should step in quietly.
      </Paragraph>

      <PullQuote>
        Because the most successful AI products don&rsquo;t just optimize results. They
        preserve the feeling: &ldquo;I had a say in this.&rdquo;
      </PullQuote>

      <Paragraph>
        The question isn&rsquo;t whether to use AI in our products. It&rsquo;s whether
        we&rsquo;re designing systems that still need people &mdash; not just to click
        &ldquo;Approve,&rdquo; but to think, choose, and sometimes disagree.
      </Paragraph>

      <Paragraph>
        Because the moment users stop feeling necessary, they stop feeling engaged. And
        that&rsquo;s when they start looking for something else.
      </Paragraph>
    </BlogPost>
  );
}

export default WhenAIShiftsControl;
