export const ProjectList = (props) => {

    const {projectsList} = props;


    const testStatus = () => {
        console.log(projectsList)
    }


  return (
    <>
        <div>ProjectList</div>
        <button onClick={testStatus}>Click</button>
        <div>
        {projectsList.map((project, index) => (
                <img key={index} src={project.img} alt="" />
            ))}
        </div>
    </>
  )
}
