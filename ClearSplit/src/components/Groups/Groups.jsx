import "./Groups.scss";
import { FaUserFriends, FaListUl, FaPlus } from "react-icons/fa";

function Groups() {
  const members = ["Disha", "Tanvi", "Iman"];

  return (
    <section className="group">
      <div className="group__container">
        <div className="group__header">
          <FaListUl className="group__icon" />
          <h2 className="group__title">Gatineau Park</h2>
        </div>

        <div className="group__members">
          {members.map((member, index) => (
            <div className="group__member" key={index}>
              <div className="group__member-left">
                <FaUserFriends />
                <span>{member}</span>
              </div>
              <button className="group__remove">×</button>
            </div>
          ))}
        </div>

        <button className="group__action-button">
          <FaPlus />
          <span>Add Member</span>
        </button>
      </div>

      <button className="group__action-button group__action-button--secondary">
        <FaPlus />
        <span>Create Group</span>
      </button>
    </section>
  );
}

export default Groups;
