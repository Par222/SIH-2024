import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
// import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const questions = [
  {
    id: 1,
    options: ['nice', 'nice', 'nice', 'nice'],
    correct: 2,
    chosen: 1,
  },
  {
    id: 2,
    options: ['nice', 'nice', 'nice', 'nice'],
    correct: 1,
    chosen: 4,
  },
  {
    id: 2,
    options: ['nice', 'nice', 'nice', 'nice'],
    correct: 1,
    chosen: 1,
  },
  {
    id: 2,
    options: ['nice', 'nice', 'nice', 'nice'],
    correct: 1,
    chosen: 4,
  },
  {
    id: 2,
    options: ['nice', 'nice', 'nice', 'nice'],
    correct: 1,
    chosen: 3,
  },
  {
    id: 2,
    options: ['nice', 'nice', 'nice', 'nice'],
    correct: 1,
    chosen: 1,
  },
  {
    id: 2,
    options: ['nice', 'nice', 'nice', 'nice'],
    correct: 1,
    chosen: 2,
  },
];

export default function review() {
  return (
    <div>
      <nav className="bg-[#FFCB37] p-4 px-6 w-full shadow-md position-absolute">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div href="/tracker" className="cursor-pointer">
              <FontAwesomeIcon icon={faHouse} />
            </div>
            <div href="/tracker" className="ml-auto">
              <FontAwesomeIcon
                icon={faBars}
                className="align-self-end text-black"
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="p-4 mt-2">
        <div className="font-bold text-lg flex justify-between">
          <div>Communication Skills</div>
          <div className="text-green-500">2/7</div>
        </div>
        <div className="flex-col p-4 mt-4">
          {questions.map((el, index) => {
            return (
              <>
                {/* <hr className="mb-4 w-1/2  mx-auto border-1 bg-grey border-grey "></hr> */}
                <div className="flex gap-2 mb-5 border-1 shadow-md p-2 pt-4 rounded-md">
                  <div className=" flex mx-auto px-2">
                    <div className="pt-2">Q.{index + 1}</div>
                    <div>
                      <div className="ml-2 mb-4 text-sm rounded-md bg-blue-400 font-sm text-white py-2 px-2 ">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Consectetur, minus!
                      </div>

                      <div className="ml-2 px-2 mt-2 flex-col gap-2">
                        {el.options.map((option, index) => (
                          <div
                            className={`${
                              index + 1 == el.correct
                                ? 'bg-green-500 text-white border-green-500'
                                : el.chosen == index + 1
                                ? 'bg-red-500 text-white border-red-500'
                                : 'text-yellow-400 border-yellow-400'
                            } px-5 rounded-full    border-2 my-3 text-sm py-2`}
                          >
                            {index + 1}. {'\t\t'} {option}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </div>
  );
}
