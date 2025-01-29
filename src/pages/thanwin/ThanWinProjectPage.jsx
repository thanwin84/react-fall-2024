import { useParams } from 'react-router';
import { Counter, GradeCalculator } from '@/components/thanwin';

export const ThanWinProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
    'grade-calculator': <GradeCalculator />,
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white px-2 py-2 w-8/12">{selectedProject}</div>;
};
