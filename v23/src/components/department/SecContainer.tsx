import TeamContainer from "./TeamContainer";

type TeamMember = {
  imgSource: string;
  name: string;
  position: string;
};

type SecContainerProps = {
  teamMembers: TeamMember[];
};

const SecContainer = ({ teamMembers }: SecContainerProps) => {
  const BlueBgWaale = teamMembers.filter(
    (member) =>
      member.position === "Under Secretary General" || member.position === "Director"
  );

  const GreenBgWaale = teamMembers.filter(
    (member) =>
      member.position !== "Under Secretary General" && member.position !== "Director"
  );

  return (
    <div className="flex gap-4 justify-center flex-wrap w-full">
      <div className="flex gap-4 justify-center flex-wrap w-full">
        {BlueBgWaale.map((member, index) => (
          <TeamContainer
            key={index}
            imgSource={member.imgSource}
            name={member.name}
            position={member.position}
            blueBg={true} 
          />
        ))}
      </div>
      <div className="flex gap-4 justify-center flex-wrap w-full">
        {GreenBgWaale.map((member, index) => (
          <TeamContainer
            key={index}
            imgSource={member.imgSource}
            name={member.name}
            position={member.position}
            blueBg={false}
          />
        ))}
      </div>
    </div>
  );
};

export default SecContainer;
