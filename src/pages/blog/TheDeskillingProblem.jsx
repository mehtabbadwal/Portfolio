import BlogPost, { Paragraph, SectionBreak, PullQuote } from '../../components/BlogPost';

function TheDeskillingProblem() {
  return (
    <BlogPost
      title="The Deskilling Problem"
      date="JUN 2"
      author="MEHTAB BADWAL"
      readTime="7"
      heroImage="/deskilling_problem.svg"
      nextPost={{
        title: 'The Two-Hat Problem',
        url: '/blog/the-two-hat-problem',
      }}
    >
      <Paragraph>
        I use AI to write code. I&rsquo;m a designer, not a developer, and until recently that meant I
        couldn&rsquo;t build the things I designed without handing them off to someone who could. Now I
        open Claude, describe what I want, and it writes the code for me. I look at what it built. I
        check if it works. I test the interactions, the spacing, the responsive behavior. If it looks
        right and behaves right, I ship it.
      </Paragraph>

      <Paragraph>
        I have no idea what the code actually says.
      </Paragraph>

      <Paragraph>
        If something breaks in a way I can&rsquo;t see &mdash; a performance issue, a security problem,
        something structurally wrong underneath a surface that looks fine &mdash; I can&rsquo;t fix it.
        I can only ask the tool to fix it. And I&rsquo;m trusting that what it gives me back is better,
        without being able to verify that myself. I&rsquo;m building on a layer I can&rsquo;t read.
      </Paragraph>

      <Paragraph>
        I&rsquo;ve been thinking about what that means. Not in a panic &mdash; the tools are genuinely
        useful and I&rsquo;m not about to stop using them. But there&rsquo;s something happening in the
        relationship between the person and the work that we&rsquo;re not really talking about yet.
      </Paragraph>

      <SectionBreak>
        The developers&rsquo; version is different and in some ways more unsettling.
      </SectionBreak>

      <Paragraph>
        GitHub&rsquo;s own numbers show that Copilot now writes 46% of all code for its active users, up
        from 27% when it launched. Those are people who know how to code, who used to write all of it
        themselves, and who are now writing less than half.
      </Paragraph>

      <Paragraph>
        A research group called METR tried to measure what that shift actually looks like. They ran a
        controlled experiment &mdash; experienced open-source developers working on their own codebases,
        repositories they knew inside out. Half used AI tools. Half worked without them. The developers
        using AI took 19% longer to finish.
      </Paragraph>

      <PullQuote>
        When they were asked afterward, they estimated AI had made them about 20% faster. They were
        slower. They felt faster. Nobody could tell the difference from the inside.
      </PullQuote>

      <Paragraph>
        Aviation has been sitting with a version of this for decades. When autopilot got reliable enough
        to handle most of a flight, pilots gradually stopped manually flying. Not because anyone told
        them to. Because the system was doing it well enough that practicing felt pointless &mdash; why
        fly the approach by hand when the autopilot does it cleaner? Parasuraman identified the pattern
        in the early 1990s and called it automation complacency. The more reliable the system, the less
        the person practices what it replaced. A perfectly rational response to a well-functioning tool.
      </Paragraph>

      <Paragraph>
        What stuck with me from the aviation research is that cognitive skills degrade faster than motor
        skills. Pilots who hadn&rsquo;t manually flown in months could still handle the controls
        physically. What had eroded was their judgment &mdash; reading instruments in combination,
        recognizing something unusual, making a call when the situation was ambiguous. The thinking went
        before the doing.
      </Paragraph>

      <Paragraph>
        A separate study found the same shape in software development &mdash; developers who leaned
        heavily on AI got worse at understanding code, worse at debugging, and worse at reading anything
        they hadn&rsquo;t written themselves. The output kept coming. The comprehension underneath it
        was thinning.
      </Paragraph>

      <Paragraph>
        And then there&rsquo;s the data that should worry anyone watching adoption metrics. GitClear
        tracked code churn in AI-assisted repositories and found it climbing from a 3.3% baseline to
        over 7%. More code written, more code thrown out. The machine was producing faster. The waste
        was growing at the same rate.
      </Paragraph>

      <SectionBreak>
        Here&rsquo;s where I find myself stuck as a designer thinking about this.
      </SectionBreak>

      <Paragraph>
        We measure AI adoption &mdash; how many people are using the tools, how often, how much output
        is AI-generated. Those numbers go up and we report success. But if the METR finding is real, if
        people genuinely feel more productive while actually slowing down, then the person in the middle
        of the workflow can&rsquo;t tell us what&rsquo;s happening to their own skill. The metric is
        climbing and the capability might be eroding and nobody in the system has a reliable signal for
        which is which.
      </Paragraph>

      <PullQuote>
        The framework I keep reaching for &mdash; I&rsquo;ve started calling it the Autonomy Erosion
        Test &mdash; comes down to asking the questions we tend to skip when adoption numbers look good.
        Can the person still do this work without the tool, at the level they could six months ago?
      </PullQuote>

      <Paragraph>
        Not the volume &mdash; the judgment, the ability to evaluate and debug and decide independently.
        If that&rsquo;s degrading, we&rsquo;re not looking at augmentation. We&rsquo;re looking at
        dependency, and the difference matters.
      </Paragraph>

      <Paragraph>
        And it&rsquo;s worth asking what the tool is actually teaching. A copilot that shows its
        reasoning &mdash; explains why it chose this approach over another &mdash; builds understanding
        over time. A copilot that just produces output and waits for approval trains the person to
        accept without examining. That&rsquo;s a design decision, not a technical limitation. The
        interaction pattern shapes what happens to the human.
      </Paragraph>

      <Paragraph>
        Aviation figured out that the answer wasn&rsquo;t removing autopilot. It was requiring manual
        flying hours &mdash; building practice into the system so the skill stayed alive even when the
        automation was good enough to make practice feel unnecessary. The same principle holds for any
        AI-assisted workflow. Scheduled time without the tool isn&rsquo;t a step backward. It&rsquo;s
        how you keep the thinking sharp while everything around it is optimized for speed.
      </Paragraph>

      <Paragraph>
        The point isn&rsquo;t to reject AI tools. They&rsquo;re too useful and the people using them
        aren&rsquo;t wrong to find them valuable. The point is that we&rsquo;re designing the tool side
        of this with enormous care &mdash; better models, faster inference, smoother integration &mdash;
        and barely thinking about what&rsquo;s happening to the person sitting next to it. My version
        of that is a designer who can&rsquo;t read the code she ships. A developer&rsquo;s version is
        someone who used to read it fluently and is slowly forgetting how.
      </Paragraph>

      <Paragraph>
        Both of us are building on something we can&rsquo;t fully verify. The question is whether
        we&rsquo;re going to design for that honestly or keep watching the adoption number climb and
        assume it means what we want it to mean.
      </Paragraph>
    </BlogPost>
  );
}

export default TheDeskillingProblem;
