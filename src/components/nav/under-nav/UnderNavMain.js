import { ImTicket } from "react-icons/im";

const UnderNavMain = () => {
  return (
    <div id="underNavMain">
      <div>
        <ul>
          <li>
            <span>Season Pass</span>
          </li>

          <li>
            <span>Activist Groups</span>
          </li>

          <li>
            <span>Zoo Events</span>
          </li>

          <li>
            <span>
              <ImTicket className="im-icon" />
              Get Tickets
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UnderNavMain;
