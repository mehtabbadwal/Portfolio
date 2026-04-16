import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function ShadowSystemProblem() {
  return (
    <BlogPost
      title="The Shadow System Problem"
      date="MAR 8"
      author="MEHTAB BADWAL"
      readTime="8"
      heroImage="/shadow-system.svg"
      prevPost={{
        title: 'Stay out of the way',
        url: '/blog/stay-out-of-the-way',
      }}
      nextPost={{
        title: 'The Colleague Problem',
        url: '/blog/the-colleague-problem',
      }}
    >
      <Paragraph>
        Walk into any team that uses Jira and ask them where the real priorities live.
      </Paragraph>

      <Paragraph>
        They&rsquo;ll probably pause. Then they&rsquo;ll open a Notion page. Or pull
        up a spreadsheet. Or point you to a Slack thread that somehow became the place
        where decisions actually get made.
      </Paragraph>

      <Paragraph>
        The tool is there. The team uses it. And yet, alongside it, a parallel system
        has quietly grown &mdash; one the team built themselves, one that nobody asked
        for, and one that somehow works better for the people doing the work.
      </Paragraph>

      <Paragraph>
        This isn&rsquo;t a Jira problem specifically. You see it with Salesforce, with
        ServiceNow, with Confluence, with almost any enterprise B2B product that has
        been deployed organization-wide. The shadow system is everywhere. And we keep
        treating it as an adoption problem, a training problem, or a change management
        problem.
      </Paragraph>

      <Paragraph>
        It&rsquo;s none of those things.
      </Paragraph>

      <SectionBreak>
        Here&rsquo;s what&rsquo;s actually happening.
      </SectionBreak>

      <Paragraph>
        When a tool is designed to make work visible to the organization, it is
        optimized for the person reading the data &mdash; not the person producing it.
        The ticket structure, the status labels, the audit trail, the reporting
        dashboard &mdash; these are features for managers and stakeholders. They serve
        the organization&rsquo;s need for oversight.
      </Paragraph>

      <Paragraph>
        The person actually doing the work gets a different experience. They get a
        system that asks them to translate their thinking into a format that was never
        really designed for thinking. And so they do the thinking somewhere else
        &mdash; in a Notion page, in a spreadsheet, in a thread &mdash; and then they
        transcribe the outcome into the mandated tool.
      </Paragraph>

      <Paragraph>
        They open Jira to satisfy the process. They open Slack to actually think.
      </Paragraph>

      <PullQuote>
        This is what psychologists call an autonomy gap. When people feel that a tool
        is monitoring their work rather than supporting it, they don&rsquo;t abandon
        it &mdash; they can&rsquo;t, it&rsquo;s mandatory &mdash; but they minimize
        their real cognitive investment in it.
      </PullQuote>

      <Paragraph>
        The tool becomes a reporting interface. The actual work happens somewhere they
        feel agency.
      </Paragraph>

      <Paragraph>
        The shadow system isn&rsquo;t laziness. It&rsquo;s the user&rsquo;s quiet,
        rational response to a product that answered the wrong question.
      </Paragraph>

      <Paragraph>
        The design mistake here is one we make constantly in B2B: we conflate
        visibility with usefulness.
      </Paragraph>

      <Paragraph>
        We build features that make work legible to the organization and assume that
        legibility is the same thing as support. It isn&rsquo;t. A user who can
        clearly report their status hasn&rsquo;t necessarily been helped to manage
        their work. A dashboard that gives stakeholders clarity hasn&rsquo;t
        necessarily given the practitioner anything at all.
      </Paragraph>

      <Paragraph>
        The question we should be asking before a single screen is designed is: who is
        this feature for? And we need to be honest enough to separate the answer into
        two distinct users &mdash; the person doing the work, and the person
        overseeing it. They are not the same person. They do not have the same job.
        And designing a single interface that tries to serve both equally usually ends
        up serving neither particularly well.
      </Paragraph>

      <Paragraph>
        The framework I find most useful here is what I&rsquo;d call the two-job
        audit. Before designing any feature in a B2B product, name both jobs
        explicitly:
      </Paragraph>

      <Paragraph>
        The organizational job &mdash; what this feature helps the company see, track,
        report, or control.
      </Paragraph>

      <Paragraph>
        The individual job &mdash; what this feature helps the person doing the work
        think, decide, prioritize, or execute.
      </Paragraph>

      <PullQuote>
        If you can only clearly articulate the organizational job, the feature is not
        ready to design yet. You haven&rsquo;t found the user&rsquo;s job.
      </PullQuote>

      <Paragraph>
        And if you ship it without that, you will create the conditions for a shadow
        system &mdash; because users will go find a tool that does serve their actual
        job, even if they have to build it themselves in a spreadsheet.
      </Paragraph>

      <Paragraph>
        The goal isn&rsquo;t to eliminate organizational visibility. Businesses need
        that and it&rsquo;s a legitimate requirement. The goal is to earn it &mdash;
        by making the tool genuinely useful to the person doing the work first, so
        that the organizational visibility is a byproduct of real use rather than a
        tax on top of it.
      </Paragraph>

      <PullQuote>
        When users feel like a tool is working for them, they use it completely. When
        they feel like it&rsquo;s working for someone watching them, they use it
        minimally &mdash; and they build something better on the side.
      </PullQuote>

      <Paragraph>
        The shadow system is always a message. Most of the time we&rsquo;re just not
        reading it.
      </Paragraph>
    </BlogPost>
  );
}

export default ShadowSystemProblem;
