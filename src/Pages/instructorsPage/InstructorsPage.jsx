import { Helmet } from "react-helmet";
import useInstructors from '../../components/Hooks/useInstructors';
import TeachersCard from "../../components/TeachersCard/TeachersCard";
const InstructorsPage = () => {
    const [instructors] = useInstructors();
    console.log(instructors);
  return (
    <div>
      <Helmet>
        <title>Easy to learn music school | instructors</title>
      </Helmet>
      <div className="mx-10 space-y-10">
        {
           instructors?.map(instructor => <TeachersCard
           key={instructor._id}
           instructor={instructor}
           ></TeachersCard>) 
        }
      </div>
    </div>
  );
};

export default InstructorsPage;
