import {
  
  MysqlLogo,
  ExpressJSLogo,
  GraphQLLogo,
  GithubLogo,
  JavaScriptLogo,
  MongoDBLogo,
  NodeJSLogo,
  NextJSLogo,
  ReactJSLogo,
  TailwindCSSLogo,
} from "../Assets/AssetsList";
import SkillsCard from "../Components/Cards/SkillsCard";
import Title from "../Components/Title";

const Skills = () => {
  const data = [
    JavaScriptLogo,
    ReactJSLogo,
    TailwindCSSLogo,
    NodeJSLogo,
    MongoDBLogo,
    GithubLogo,
    ExpressJSLogo,
    GraphQLLogo,
    NextJSLogo,
    MysqlLogo,
  ];

  const TitleText = (
    <h1 className=" text-gray-800 font-bebas-neue text-4xl dark:text-white pb-6 ">
      Where <strong className="text-fadeMainTheme">Passion</strong> Meets{" "}
      <strong className="text-fadeMainTheme">Proficiency</strong>
    </h1>
  );
  return (
    <div className="my-20 flex justify-center items-center flex-col">
      <Title text={TitleText} id="skills" />
      <div
        id="skills"
        className="grid grid-cols-2 lg:grid-cols-5  gap-10 mt-10 px-10 lg:ml-10 lg:w-10/12 max-w-fit"
      >
        {data.map((item, index) => (
          <SkillsCard imgSrc={item} index={index} key={index} />
        ))}
      </div>    
    </div>
  );
};

export default Skills;
