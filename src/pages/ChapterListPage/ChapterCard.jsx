import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./ChapterCard.scss";
import PropTypes from "prop-types";
import messages from "../../assets/messages.svg";
import { createClient } from "@supabase/supabase-js";

const propTypes = {
  title: PropTypes.string,
  index: PropTypes.number,
};

const supabaseUrl = import.meta.env.VITE_APP_KEY;
const supabaseKey = import.meta.env.VITE_APP_SECRET_CODE;
const supabase = createClient(supabaseUrl, supabaseKey);

function ChapterCard({ title, index }) {
  const [usersData, setUsersData] = useState([]);

  async function fetchUsers() {
    let { data: users, error } = await supabase.from("ean").select("*");
    if (error) {
      console.log("Error", error);
    } else {
      setUsersData(users);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <Link to="/textlist">
      <button className="chapter-card">
        <div className="chapter-card-badge">Chapter {index}</div>
        <div className="chapter-card-title">{title}</div>
        <div className="chapter-card-writtenarticle-section">
          <img src={messages} alt="Messages" />
          <div className="chapter-card-writtenarticle">작성된 글</div>
          <div className="chapter-card-writtenarticle-num">
            {usersData.length}
          </div>
        </div>
      </button>
    </Link>
  );
}

ChapterCard.propTypes = propTypes;

export default ChapterCard;
