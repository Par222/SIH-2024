import { faBars, faHouse } from '@fortawesome/free-solid-svg-icons';
// import { faHouse, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from '@/components/common/NavBar';

const questions = [
  {
    questionTitle: 'What is active listening?',
    options: [
      'Talking loudly to get your point across',
      'Paying full attention to the speaker, asking questions, and providing feedback',
      'Ignoring the speaker and focusing on your phone',
      'Nodding your head in agreement',
    ],
    chosenOptionIndex: 1, // Set to a random index (0 to 3) as an example
    correctOptionIndex: 1,
  },
  {
    questionTitle:
      'Which of the following is a non-verbal communication skill?',
    options: [
      'Speaking clearly',
      'Maintaining eye contact',
      'Using technical jargon',
      'Using hand gestures effectively',
    ],
    chosenOptionIndex: 2, // Set to a random index (0 to 3) as an example
    correctOptionIndex: 1,
  },
  {
    questionTitle: 'What is the key to effective communication?',
    options: [
      'Using big words to sound more intelligent',
      'Being a good listener and expressing yourself clearly',
      'Talking as much as possible to dominate the conversation',
      'Using humor to break the ice',
    ],
    chosenOptionIndex: 3, // Set to a random index (0 to 3) as an example
    correctOptionIndex: 1,
  },
  {
    questionTitle: 'How can you show empathy in a conversation?',
    options: [
      'Interrupt the other person to share your own experiences',
      "Listen attentively and acknowledge the other person's feelings",
      'Avoid eye contact to maintain personal space',
      'Use humor to lighten the mood',
    ],
    chosenOptionIndex: 1, // Set to a random index (0 to 3) as an example
    correctOptionIndex: 1,
  },
  {
    questionTitle: 'What is the importance of body language in communication?',
    options: [
      'Body language has no impact on communication',
      'It can convey emotions, intentions, and interest in the conversation',
      "It's only useful in formal business settings",
      "It's primarily for entertainment purposes",
    ],
    chosenOptionIndex: 1, // Set to a random index (0 to 3) as an example
    correctOptionIndex: 3,
  },
];

export default function review() {
  return (
    <div>
      <NavBar />
      <div className="p-4 mt-2">
        <div className="font-bold text-lg flex justify-between">
          <div>Communication Skills</div>
          <div className="text-green-500">2/5</div>
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
                        {el.questionTitle}
                      </div>

                      <div className="ml-2 px-2 mt-2 flex-col gap-2">
                        {el.options.map((option, index) => (
                          <div
                            className={`${
                              index == el.correctOptionIndex
                                ? 'bg-green-500 text-white border-green-500'
                                : el.chosenOptionIndex == index
                                ? 'bg-red-500 text-white border-red-500'
                                : 'text-yellow-400 border-yellow-400'
                            } px-5 rounded-full   font-medium border-2 my-3 text-sm py-2`}
                          >
                            {['A', 'B', 'C', 'D'][index]} . {'\t\t'} {option}
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
