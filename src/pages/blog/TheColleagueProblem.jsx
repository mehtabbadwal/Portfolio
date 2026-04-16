import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function TheColleagueProblem() {
  return (
    <BlogPost
      title="The Colleague Problem"
      date="APR 16"
      author="MEHTAB BADWAL"
      readTime="7"
      heroImage="/colleague-problem.svg"
      prevPost={{
        title: 'The Shadow System Problem',
        url: '/blog/shadow-system-problem',
      }}
      nextPost={{
        title: 'Stay out of the way',
        url: '/blog/stay-out-of-the-way',
      }}
    >
      <Paragraph>
        There is an unofficial onboarding process running inside almost every large
        organization. Nobody designed it. Nobody approved it. It has no documentation,
        no walkthrough, no tooltip sequence.
      </Paragraph>

      <Paragraph>
        It&rsquo;s the person next to you.
      </Paragraph>

      <Paragraph>
        In teams that use Salesforce, Workday, SAP, ServiceNow &mdash; any enterprise
        product with significant complexity &mdash; the most common way new users learn
        the tool is by turning to a colleague and asking how they do it. Not the help
        center. Not the onboarding flow. Not the tutorial. The person three desks away
        who has been using it longest and has figured out which parts to ignore.
      </Paragraph>

      <Paragraph>
        What gets passed along in that conversation is never quite the product as
        designed. It&rsquo;s the product as survived. A filtered version, shaped by
        that colleague&rsquo;s own workarounds, the shortcuts they discovered by
        accident, and the features they gave up on entirely. By the time the knowledge
        reaches a new user, it has traveled through several people&rsquo;s frustrations
        and come out the other side as informal mythology.
      </Paragraph>

      <Paragraph>
        The product you end up learning isn&rsquo;t really Salesforce. It&rsquo;s your
        team&rsquo;s folk version of it.
      </Paragraph>

      <SectionBreak>
        We tend to read this as a cultural strength.
      </SectionBreak>

      <Paragraph>
        Knowledge sharing, collaboration, community of practice. And sometimes it
        genuinely is. But in B2B product design, peer-to-peer knowledge transfer at
        scale is worth reading more carefully &mdash; because it is almost always a
        signal that the interface failed to do something important.
      </Paragraph>

      <Paragraph>
        Here&rsquo;s the psychology underneath it.
      </Paragraph>

      <Paragraph>
        When a system exceeds a user&rsquo;s ability to make sense of it through the
        interface alone, they don&rsquo;t redouble their effort. They don&rsquo;t go
        back to the documentation. What they do, reliably and rationally, is transfer
        the cognitive load to a trusted human. Psychologists call this transactive
        memory &mdash; the way we distribute knowledge across our social network rather
        than holding it all ourselves. We do it naturally and efficiently. We do it
        because it works.
      </Paragraph>

      <PullQuote>
        Transactive memory in product adoption reveals something specific. It means
        the product never established itself as a reliable, legible source of truth.
        The user tried to learn from it, found the cost too high, and outsourced that
        learning to a person instead. The colleague became the UX layer the product
        never built.
      </PullQuote>

      <Paragraph>
        This isn&rsquo;t about user intelligence or patience. It&rsquo;s about where
        trust lands. And in enterprise software, trust consistently lands on people
        before it lands on interfaces &mdash; because people can read context, answer
        follow-up questions, and admit when something doesn&rsquo;t make sense.
        Interfaces, most of the time, cannot.
      </Paragraph>

      <Paragraph>
        The design mistake here is treating learnability as a documentation problem.
      </Paragraph>

      <Paragraph>
        When adoption is low, the instinct is to add more guidance &mdash; better
        tooltips, longer walkthroughs, more detailed help articles. These things have
        value. But they address the symptom rather than the cause. If users are
        consistently bypassing the product&rsquo;s own learning infrastructure in
        favor of asking a human, the problem is not that the guidance is insufficient.
        The problem is that the interface itself is not teaching.
      </Paragraph>

      <Paragraph>
        A well-designed product communicates its own logic. Not through text overlaid
        on top of it, but through the structure of the interface &mdash; the way
        actions are named, the way consequences are visible, the way one step leads
        obviously to the next. When that structure is clear, users learn by using.
        When it isn&rsquo;t, they learn by asking.
      </Paragraph>

      <PullQuote>
        The question worth sitting with is not &ldquo;how do we improve our
        onboarding flow?&rdquo; It&rsquo;s &ldquo;why does our product require an
        onboarding flow at all to be usable?&rdquo;
      </PullQuote>

      <Paragraph>
        The framework I find most useful here is what I call the day-one stranger
        test.
      </Paragraph>

      <Paragraph>
        Imagine a new user joins the team. They are competent, motivated, and have no
        colleagues to ask &mdash; no one to translate, no one to show them the
        workaround, no tribal knowledge available. They have only the product itself.
      </Paragraph>

      <Paragraph>
        How far do they get?
      </Paragraph>

      <Paragraph>
        Not in terms of completing every feature &mdash; complexity is legitimate in
        enterprise software and some learning curve is unavoidable. But specifically:
        can they understand what the product is for, what they are supposed to do
        first, and what will happen when they do it? Can the interface answer those
        three questions without human intervention?
      </Paragraph>

      <Paragraph>
        If the answer is no, you have a legibility problem. And the fix is not more
        documentation. It&rsquo;s going back to the interface and asking where the
        logic broke down &mdash; where the product stopped communicating its own
        structure and started assuming the user would figure it out, ask someone, or
        give up.
      </Paragraph>

      <Paragraph>
        Run the test on your current product. Pick the feature with the lowest
        adoption. Put a new user in front of it with no guidance and watch where they
        stop. That moment &mdash; the pause, the hesitation, the glance toward a
        colleague &mdash; is the design problem. Everything before it was fine.
        Everything after it is tribal mythology filling in a gap the interface left
        open.
      </Paragraph>

      <Paragraph>
        Enterprise software earns trust slowly and loses it fast. The colleague who
        translates your product into something usable is doing you a favor you
        didn&rsquo;t earn. At some point they leave, or they get the mythology wrong,
        or the new user never finds the right person to ask.
      </Paragraph>

      <PullQuote>
        The goal isn&rsquo;t to eliminate human knowledge sharing. It&rsquo;s to
        design products that are legible enough that the human layer is a complement
        to the interface, not a replacement for it.
      </PullQuote>

      <Paragraph>
        When a product can teach itself, adoption stops being a people problem and
        starts being a design outcome.
      </Paragraph>
    </BlogPost>
  );
}

export default TheColleagueProblem;
