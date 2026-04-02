import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function WhyUsersDontSayWhatTheyFeel() {
  return (
    <BlogPost
      title="Why Users Don&rsquo;t Say What They Feel"
      date="OCT 16"
      author="MEHTAB BADWAL"
      readTime="7"
      heroImage={null}
      prevPost={{
        title: 'Designing for Dignity in Healthcare',
        url: '/blog/designing-for-dignity',
      }}
      nextPost={{
        title: 'The Weight of Choice',
        url: '/blog/the-weight-of-choice',
      }}
    >
      <Paragraph>
        Most user research asks people what they think about an interface. But the
        reality is that much of what drives user behavior happens before conscious
        thought &mdash; in instinct, emotion, and physical reaction.
      </Paragraph>

      <SectionBreak>
        The common designer&rsquo;s puzzle
      </SectionBreak>

      <Paragraph>
        One of the toughest challenges in UX design is this: users say they love a
        feature, but then they don&rsquo;t use it. I&rsquo;ve faced this countless
        times, and I learned that this disconnect isn&rsquo;t about users lying or bad
        research &mdash; it&rsquo;s about how human consciousness works.
      </Paragraph>

      <Paragraph>
        Users don&rsquo;t fully understand their own experiences because most of UX
        happens before conscious thought. It happens in what we call the
        phenomenological layer: the raw feeling of using something, deep in the body
        and mind, before interpretation or judgment.
      </Paragraph>

      <SectionBreak>
        The real UX happens in what users feel
      </SectionBreak>

      <Paragraph>
        Imagine this: describing the color red versus actually seeing red. The
        explanation never captures the vividness of the experience. The same is true
        for digital design.
      </Paragraph>

      <Paragraph>
        When users tap a button, scroll a list, or fill a form, they experience it
        physically &mdash; through rhythm, flow, resistance, even satisfaction. These
        feelings guide their actions far more than what they later say or think about
        the design.
      </Paragraph>

      <PullQuote>
        Great UX isn&rsquo;t just about solving problems logically &mdash; it&rsquo;s
        about designing how it feels to be a user.
      </PullQuote>

      <SectionBreak>
        Layers of user experience
      </SectionBreak>

      <Paragraph>
        I think about UX in three layers:
      </Paragraph>

      <Paragraph>
        Felt experience: &ldquo;This feels smooth or clunky.&rdquo; It&rsquo;s instant
        and bodily.
      </Paragraph>

      <Paragraph>
        Thinking: &ldquo;This button means submit.&rdquo; The mind interprets
        what&rsquo;s happening.
      </Paragraph>

      <Paragraph>
        Reflecting: &ldquo;This design is user-friendly.&rdquo; The user explains
        their feelings after the fact.
      </Paragraph>

      <Paragraph>
        Most research focuses on the last two, but I design for the very first
        &mdash; the invisible foundation of all user behavior.
      </Paragraph>

      <SectionBreak>
        Real-world example: Instagram&rsquo;s heart
      </SectionBreak>

      <Paragraph>
        Instagram&rsquo;s &ldquo;heart&rdquo; is more than a symbol. It&rsquo;s a
        precise, satisfying gesture &mdash; the tap feels just right, the animation
        follows smoothly, and it&rsquo;s easy to reach with your thumb. Instagram
        nailed the felt experience first, then the meaning.
      </Paragraph>

      <SectionBreak>
        How I design for lived experience
      </SectionBreak>

      <Paragraph>
        Body-first thinking: I don&rsquo;t just ask what something means &mdash; I
        ask how it feels to interact with.
      </Paragraph>

      <Paragraph>
        Designing time: I craft how long something feels to take, using smooth
        animations and progress feedback to avoid user anxiety.
      </Paragraph>

      <Paragraph>
        Spatial design: I create interfaces that users don&rsquo;t just see but
        physically inhabit &mdash; carefully considering thumb zones, gestures, and
        spatial flow.
      </Paragraph>

      <SectionBreak>
        Research beyond words
      </SectionBreak>

      <Paragraph>
        Instead of &ldquo;Do you like this?&rdquo; I ask:
      </Paragraph>

      <Paragraph>
        &ldquo;What sensations do you notice when using this?&rdquo;
      </Paragraph>

      <Paragraph>
        &ldquo;Where do your fingers hesitate or move smoothly?&rdquo;
      </Paragraph>

      <Paragraph>
        Watching micro-expressions and body language tells me what users experience
        before they even realize it.
      </Paragraph>

      <PullQuote>
        Don&rsquo;t ask users if they like something &mdash; ask what they feel in
        their body as they use it.
      </PullQuote>

      <SectionBreak>
        Changing common UX patterns
      </SectionBreak>

      <Paragraph>
        Replace frustrating loading waits with rhythmic animations that reassure.
      </Paragraph>

      <Paragraph>
        Turn forms into smooth conversations, not interrogations.
      </Paragraph>

      <Paragraph>
        Handle errors gently, avoiding frustration and keeping the flow alive.
      </Paragraph>

      <Paragraph>
        Guide users naturally through onboarding rather than overwhelming them.
      </Paragraph>

      <PullQuote>
        Interfaces are not just screens to look at &mdash; they are spaces users
        inhabit physically and emotionally.
      </PullQuote>

      <SectionBreak>
        The bottom line
      </SectionBreak>

      <Paragraph>
        Great UX isn&rsquo;t just about solving problems logically &mdash; it&rsquo;s
        about designing how it feels to be a user. This approach leads to interfaces
        that users live intuitively, driving engagement and satisfaction at a deeper
        level.
      </Paragraph>

      <Paragraph>
        I believe the future of UX lies in embracing this lived experience first and
        foremost.
      </Paragraph>

      <Paragraph>
        Design has always been about understanding people &mdash; but rarely do we ask
        how they feel in their bodies when they interact with what we create.
      </Paragraph>

      <Paragraph>
        When a user&rsquo;s hand hesitates above a button or their breath quickens
        during a form, the interface is already speaking &mdash; even before words
        appear.
      </Paragraph>

      <Paragraph>
        True empathy begins in those quiet spaces between intent and action, where
        instinct meets interface and emotion meets design.
      </Paragraph>

      <PullQuote>
        Because design isn&rsquo;t just about what users think &mdash; it&rsquo;s
        about what their bodies remember.
      </PullQuote>
    </BlogPost>
  );
}

export default WhyUsersDontSayWhatTheyFeel;
