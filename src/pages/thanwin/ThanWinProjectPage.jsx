import { useParams } from 'react-router';
import { Counter, Ecommerce } from '@/components/thanwin';

export const ThanWinProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {
    'counter-app': <Counter />,
    'simple-ecommerce': <Ecommerce />,
  };

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white  w-8/12">{selectedProject}</div>;
};
