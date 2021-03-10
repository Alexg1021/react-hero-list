const HeadingComponent = ({ title, subTitle }) => {
  return (
    <div className='row text-center'>
      <div className='col'>
        <h1 className='my-3'>{title}</h1>
        <h3>{subTitle}</h3>
      </div>
    </div>
  );
};

export default HeadingComponent;
