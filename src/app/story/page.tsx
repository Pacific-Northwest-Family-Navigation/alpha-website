import { Image } from "@heroui/react";
import NextImage from "next/image";

export default function Story() {
  return (
    <div>
      <p>
        My journey started in March of 2011 when my oldest son was five years
        old.&nbsp; I will never forget the day when his doctor told me he had
        Oppositional Defiance Disorder, which falls under the Autism Spectrum
        Disorder Diagnosis.&nbsp; What on earth is Autism?&nbsp; How did my son
        &quot;get&quot; Autism?&nbsp; Can he outgrow it?&nbsp; Did I give it to
        him? Does this mean he can&apos;t live a normal life?&nbsp; All of these
        things were running through my head.&nbsp;&nbsp;
      </p>
      <p>&nbsp;</p>
      <p>
        When a doctor gives you a diagnosis, they do not give you a
        manual.&nbsp; They give you a piece of paper that gives you a diagnosis
        and pretty much sends you on your way.&nbsp; Parents often find
        themselves isolated, feeling alone, having nobody to talk to, wondering
        where they go from there.&nbsp; I was that parent.&nbsp; I started
        researching and looking for support groups and looking for anything and
        everything to help my son.&nbsp; I thought to myself &quot;I can&apos;t
        be the only parent with a child with Autism&quot;.&nbsp; I met another
        mom, and we decided to start a support group:&nbsp; Vancouver Washington
        Autism Mom&apos;s Support Group.&nbsp; We started with just the two of
        us.&nbsp; I met with the Arc of SW Washington, and they donated their
        conference room for us to use for our meeting space twice a month for
        two hours.&nbsp; We made flyers, made a Facebook page and used word of
        mouth.&nbsp; Month by month our group grew.&nbsp; We started doing
        events to bring families together to let them know they are not
        alone.&nbsp; We hosted Easter egg hunts, potlucks, summer picnics, and
        Sensitive Santa events to name a few.&nbsp; Today our group, along with
        another group I started called Autism Parents Support, has almost 1500
        members and is growing every day.
      </p>
      <p>&nbsp;</p>
      <p>
        I consider myself a person who never quits and doesn&apos;t give
        up.&nbsp; I want to know every resource that is out there to help
        families.&nbsp; My goal is to find the resources and share them with
        families and I have been doing this since the day I learned about my
        first resource.&nbsp; I know what it feels like to feel alone and feel
        hopeless.&nbsp; I don&apos;t want families feeling like this. I want to
        bring families together.&nbsp; I want to network with all of the
        resources out there.&nbsp; I want to educate families on IEP&apos;s and
        504&apos;s and help them navigate the educational system.&nbsp; I want
        to support every single family that needs help.&nbsp; That is my
        goal.&nbsp; I don&apos;t want any family feeling alone on this journey.
      </p>
      <p>&nbsp;</p>
      <p>
        In October 2024, I started serving a three-year term on the WADDC
        (Washington State Developmental Disability Council)&nbsp; . I joined
        this council because of what they do and the changes we can make
        together.&nbsp; WADDC brings together community partners to address
        critical issues, provide leadership, training, and advocate for
        equitable policies, programs, and practices on behalf of people with
        developmental disabilities and their families.&nbsp;&nbsp;
      </p>
      <p>&nbsp;</p>
      <p>I look forward to helping serve our Pacific Northwest Families!</p>
      <div className="flex justify-center items-center pt-12">
        <Image
          src="/mystory.jpg"
          alt="My Story"
          as={NextImage}
          width={1024/2}
          height={768/2}
        />
      </div>
    </div>
  );
}
