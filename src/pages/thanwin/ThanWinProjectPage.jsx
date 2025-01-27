import { useParams } from 'react-router';

export const ThanWinProjectPage = () => {
  const { projectId } = useParams();

  const componentMap = {};

  const selectedProject = componentMap[projectId];

  if (!selectedProject) {
    return <div>Project not found</div>;
  }

  return <div className="bg-white px-2 py-2 w-8/12">{selectedProject}</div>;
};
