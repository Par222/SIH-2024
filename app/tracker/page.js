import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
// import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
export default function Tracker() {
  return (
    <div>
      <div className="p-4 flex-col">
        <div className="p-2">
          <div className="font-bold text-lg mb-2">Skill Progress</div>

          <div className="p-2 flex flex-wrap">
            {['Writing', 'Marathi', 'Communication', 'Hindi', 'Letter'].map(
              (el) => (
                <div className="bg-sky-400 text-sm  inline px-4 py-1 rounded-2xl shadow-md m-1 mb-2">
                  {el}
                </div>
              )
            )}
          </div>
          <div className="font-bold text-lg mt-4 mb-2">Course Learnings</div>
          <div className="p-2 grid grid-cols-2 gap-3">
            {[
              { name: 'Writing Comprehension', p: 15 },
              { name: 'Communication', p: 40 },
              { name: 'Physics', p: 80 },
            ].map((el) => (
              <div className="container p-4 bg-blue-100 rounded-lg">
                <div className="flex justify-between items-center gap-2 h-1/2">
                  <div className="font-bold text-xs">{el.name}</div>
                  <button className="text-xs text-white bg-blue-500 px-3 py-1 rounded-full">
                    Resume
                  </button>
                </div>
                <div className="flex justify-between mt-2 items-center h-1/2">
                  {/* <div className="w-9/12 bg-white h-2 rounded-full"></div> */}
                  <div className="flex w-9/12 mt-1">
                    <div
                      style={{
                        backgroundColor: '#5BB318',
                        width: `${el.p}%`,
                        height: '.5em',
                        borderTopLeftRadius: '10em',
                        borderBottomLeftRadius: '10em',
                      }}
                    ></div>
                    <div
                      style={{
                        backgroundColor: '#fff',
                        width: `${100 - el.p}%`,
                        height: '.5em',
                        borderTopRightRadius: '10em',
                        borderBottomRightRadius: '10em',
                      }}
                    ></div>
                  </div>
                  <div className="font-bold text-sm">{el.p}%</div>
                </div>
              </div>
            ))}
          </div>

          <div className="font-bold text-lg mt-4 mb-2">Recent Assignments</div>
          <div className="p-2 grid grid-cols-2 gap-3">
            {[
              { name: 'Writing Comprehension', m: '10/30' },
              { name: 'Communication', m: '2/5' },
              { name: 'Physics', m: '5/10' },
            ].map((el) => (
              <div className="container p-4 bg-blue-100 rounded-lg">
                <div className="flex justify-between items-center gap-2 h-1/2">
                  <div className="font-bold text-xs">{el.name}</div>
                  <div className="text-sm font-bold">{el.m}</div>
                </div>

                <div className="flex justify-between mt-2 items-center h-1/2">
                  <button className="text-xs text-white bg-blue-500 px-3 py-1 rounded-full">
                    <Link href="/review">Review</Link>
                  </button>
                  {/* <div className="w-9/12 bg-white h-2 rounded-full"></div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
