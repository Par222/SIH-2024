import Card from "./common/Card";

function ScholarShipItem(props) {
  const scholarship = props?.scholarship;

  return (
    <Card
      className="p-0 bg-yellow-100 hover:scale-110 transition-all transition-0.2 cursor-pointer"
      onClick={() => {
        props?.onViewScholarship(
          scholarship?.title?.slice(
            0,
            scholarship?.title?.indexOf(scholarship?.state)
          )
        );
      }}
    >
      <div className="h-[300px] w-full">
        <img
          src="https://i0.wp.com/www.indiayojana.in/wp-content/uploads/2021/03/mahadbt-login.jpg?fit=1920%2C1080&ssl=1"
          className="h-full w-full object-cover object-center rounded-md"
        />
      </div>
      <div className="p-4 flex flex-col justify-between">
        <h2 className="font-medium text-md">{scholarship?.title}</h2>
        <div className="mt-2">
          <p className="font-medium">Important Dates: </p>
          <p>{scholarship?.important_dates}</p>
        </div>
      </div>
    </Card>
  );
}

export default ScholarShipItem;
