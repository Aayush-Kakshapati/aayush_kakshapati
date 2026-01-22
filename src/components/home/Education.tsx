import Card from "../ui/Card";
import { Heading, Text, Mono } from "../ui/fonts";
import { education } from "@/data/education";

export default function Education() {
  return (
    <Card>
      <Heading as="h2" className="text-(--primary)">
        Education
      </Heading>
      <div className="space-y-4 mt-4">
        {education.map((edu, idx) => (
          <div
            key={idx}
            className="p-4 rounded-md border border-(--border) hover:border-(--muted) bg-(--background)"
          >
            <Heading as="h3" className="text-base md:text-lg">
              {edu.school} — {edu.degree}
            </Heading>
            <Text className="text-sm text-(--muted)">{edu.duration}</Text>
            <Text className="text-sm mt-1">
              <Mono>Relevant Coursework:</Mono> {edu.coursework}
            </Text>
          </div>
        ))}
      </div>
    </Card>
  );
}
