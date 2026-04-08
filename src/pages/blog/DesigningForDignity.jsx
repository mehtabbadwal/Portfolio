import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function DesigningForDignity() {
  return (
    <BlogPost
      title="Designing for Dignity in Healthcare"
      date="OCT 21"
      author="MEHTAB BADWAL"
      readTime="6"
      heroImage="/writing-healthcare.svg"
      prevPost={{
        title: 'When AI Shifts Control',
        url: '/blog/when-ai-shifts-control',
      }}
      nextPost={{
        title: "Why Users Don\u2019t Say What They Feel",
        url: '/blog/why-users-dont-say-what-they-feel',
      }}
    >
      <Paragraph>
        Healthcare interfaces often focus on efficiency. Fill out this form. Click
        here. Upload your insurance card. Done.
      </Paragraph>

      <Paragraph>
        But healthcare isn&rsquo;t just a transaction. It&rsquo;s a moment when people
        feel vulnerable. And how we design those moments matters more than we think.
      </Paragraph>

      <Paragraph>
        I&rsquo;ve noticed something across every healthcare product I&rsquo;ve worked
        on: the interface isn&rsquo;t neutral. It either makes someone feel seen
        &mdash; or it makes them feel like a number in a queue.
      </Paragraph>

      <PullQuote>
        The difference isn&rsquo;t in what the system does. It&rsquo;s in how it treats
        people while doing it.
      </PullQuote>

      <SectionBreak>
        What dignity looks like in healthcare UX
      </SectionBreak>

      <Paragraph>
        Dignity in healthcare design isn&rsquo;t about being nice. It&rsquo;s about
        recognizing that the person using your product might be scared, confused, or
        dealing with something they&rsquo;ve never had to deal with before.
      </Paragraph>

      <Paragraph>
        When someone is filling out a health history form at 2 AM because they
        can&rsquo;t sleep, they&rsquo;re not just entering data. They&rsquo;re
        confronting their own mortality, their family history, their fears.
      </Paragraph>

      <Paragraph>
        The interface shouldn&rsquo;t make that harder.
      </Paragraph>

      <Paragraph>
        Here&rsquo;s what that means practically:
      </Paragraph>

      <Paragraph>
        Don&rsquo;t force someone to re-enter information they&rsquo;ve already given
        you. Every time you ask them to repeat their medical history, you&rsquo;re
        asking them to relive it.
      </Paragraph>

      <Paragraph>
        Don&rsquo;t hide the &ldquo;why&rdquo; behind medical jargon. If you&rsquo;re
        asking for their insurance information, tell them it&rsquo;s so the doctor
        knows what&rsquo;s covered. If you&rsquo;re asking about family history,
        explain that it helps identify risks early.
      </Paragraph>

      <Paragraph>
        Don&rsquo;t make error messages sound like they did something wrong.
        &ldquo;Invalid format&rdquo; isn&rsquo;t helpful when someone is trying to
        upload their medical records at midnight. &ldquo;We couldn&rsquo;t read that
        file format. Try a PDF or JPG instead&rdquo; is.
      </Paragraph>

      <PullQuote>
        Don&rsquo;t design for the average case. Design for the person who&rsquo;s
        having the worst day of their life.
      </PullQuote>

      <SectionBreak>
        The psychology behind it
      </SectionBreak>

      <Paragraph>
        There&rsquo;s a concept in psychology called cognitive load &mdash; the amount
        of mental effort required to use a system. In healthcare, that load is already
        high.
      </Paragraph>

      <Paragraph>
        Someone scheduling a specialist appointment isn&rsquo;t just picking a time
        slot. They&rsquo;re managing anxiety about the diagnosis, coordinating work
        schedules, arranging childcare, remembering which insurance card to bring, and
        trying to remember questions they wanted to ask the doctor.
      </Paragraph>

      <Paragraph>
        If your interface adds friction on top of that &mdash; unclear language, hidden
        costs, confusing navigation &mdash; you&rsquo;re not just creating a bad
        experience. You&rsquo;re contributing to health outcomes. Because when
        healthcare feels hard, people delay it.
      </Paragraph>

      <Paragraph>
        I&rsquo;ve seen this play out in research. People abandon appointment booking
        flows halfway through because they don&rsquo;t understand what information they
        need. They avoid portals because the language feels clinical and alienating.
        They call the office instead because at least a human will explain what
        &ldquo;prior authorization&rdquo; means.
      </Paragraph>

      <Paragraph>
        That&rsquo;s a UX failure with real consequences.
      </Paragraph>

      <SectionBreak>
        How I approach healthcare design
      </SectionBreak>

      <Paragraph>
        When I&rsquo;m designing for healthcare, I start by asking: what is this person
        worried about right now?
      </Paragraph>

      <Paragraph>
        Not what task are they trying to complete. What are they worried about?
      </Paragraph>

      <Paragraph>
        If they&rsquo;re booking an appointment, they&rsquo;re probably worried about
        cost, availability, and whether this doctor will take them seriously.
      </Paragraph>

      <Paragraph>
        If they&rsquo;re filling out a form, they&rsquo;re worried about saying the
        wrong thing, missing something important, or having their information misused.
      </Paragraph>

      <Paragraph>
        If they&rsquo;re reading test results, they&rsquo;re worried about what it
        means and what happens next.
      </Paragraph>

      <PullQuote>
        Good healthcare UX doesn&rsquo;t just make tasks easier. It addresses the worry
        underneath the task.
      </PullQuote>

      <Paragraph>
        That means being transparent about cost before they book. Showing them what
        happens after they submit a form. Explaining medical terms in plain language.
        Giving them a way to ask questions when they&rsquo;re confused.
      </Paragraph>

      <Paragraph>
        It also means designing for the reality that healthcare literacy varies widely.
        Someone with a medical background will use your product differently than someone
        who&rsquo;s never navigated insurance before. You can&rsquo;t assume familiarity
        with terms like &ldquo;copay,&rdquo; &ldquo;deductible,&rdquo; or
        &ldquo;in-network.&rdquo;
      </Paragraph>

      <Paragraph>
        And you definitely can&rsquo;t assume they know what &ldquo;EOB&rdquo; stands
        for.
      </Paragraph>

      <SectionBreak>
        The small details that matter
      </SectionBreak>

      <Paragraph>
        Here are some patterns I&rsquo;ve found that work:
      </Paragraph>

      <Paragraph>
        Show progress. If a form has 12 fields, tell them. Uncertainty is stressful.
        Knowing they&rsquo;re on step 4 of 12 is better than wondering how much longer
        this will take.
      </Paragraph>

      <Paragraph>
        Save partial progress. People get interrupted. Kids need attention. Work emails
        come in. If they have to start over, they won&rsquo;t come back.
      </Paragraph>

      <Paragraph>
        Explain what happens next. After they submit a form, don&rsquo;t just say
        &ldquo;Thank you.&rdquo; Tell them when they&rsquo;ll hear back, who will
        contact them, and what to do if they have questions.
      </Paragraph>

      <Paragraph>
        Use real language. Not &ldquo;Your claim has been adjudicated.&rdquo; Say
        &ldquo;Your insurance approved this&rdquo; or &ldquo;Your insurance denied this
        &mdash; here&rsquo;s why.&rdquo;
      </Paragraph>

      <Paragraph>
        Respect their time. If a task should take 5 minutes, make sure it actually
        takes 5 minutes. Every extra click is a reminder that this system wasn&rsquo;t
        built for them.
      </Paragraph>

      <PullQuote>
        Healthcare UX is one of the few places where design choices have direct health
        outcomes. That&rsquo;s not hyperbole. It&rsquo;s responsibility.
      </PullQuote>

      <Paragraph>
        When we design well, people engage with their health. They book the appointment
        they&rsquo;ve been putting off. They understand their treatment plan. They feel
        like the system is working with them, not against them.
      </Paragraph>

      <Paragraph>
        And when we design poorly, they don&rsquo;t.
      </Paragraph>
    </BlogPost>
  );
}

export default DesigningForDignity;
