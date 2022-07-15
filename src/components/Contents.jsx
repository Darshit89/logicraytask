import React, { createContext, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import axios from "axios";

export const filterContext = createContext([]);

function Contents() {
  const [dropdownData, setdropdownData] = useState({});
  const [filterData, setFilterData] = useState([]);
  const [filterToggle, setFilterToggle] = useState(false);

  const fetchFilterData = async (data) => {
    const { grade, subject, chapter, language } = data;
    const response = await axios.get(
      `http://143.110.254.46:8089/api/video/?language=${language}&subject=${subject}&grade=${grade}&chapter_no=${chapter}&`
    );

    setFilterData(response.data.results);
  };

  const selectHandler = (key) => (e) => {
    let value = e.target.value;
    setdropdownData({ ...dropdownData, [key]: value });
  };

  const submitData = () => {
    fetchFilterData(dropdownData);
  };

  const resetData = () => {
    setdropdownData({});
    setFilterData([]);
  };

  return (
    <div>
      <div className="row">
        <div className="d-md-none d-sm-block d-block">
          <button
            className=" btn btn-primary "
            onClick={() => setFilterToggle(!filterToggle)}
          >
            Filter
          </button>
        </div>
        <div className="col-md-4">
          <div
            className={
              filterToggle ? " container" : "container d-none d-md-block "
            }
          >
            <h1>Logo</h1>
            <h5>Zeal English School</h5>
            <div className="card" style={{}}>
              <div className="card-header ">
                <h2>Search Content</h2>
              </div>
              <div className="card-body">
                <div className="row form-group mb-2">
                  <div className="col-sm-4">
                    <label>Language</label>
                  </div>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      onChange={selectHandler("language")}
                      value={dropdownData.language || ""}
                    >
                      <option>select language</option>
                      <option value="English">English</option>
                      <option value="Hindi">Hindi</option>
                      <option value="Marathi">marathi</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <div className="col-sm-4">
                    <label>Board </label>
                  </div>
                  <div className="col-sm-8">
                    <select className="form-select">
                      <option>select Board</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <div className="col-sm-4">
                    <label>Subject </label>
                  </div>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      onChange={selectHandler("subject")}
                      value={dropdownData.subject || ""}
                    >
                      <option>select subject</option>
                      <option value="Maths">Maths</option>
                      <option value="Science">Science</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <div className="col-sm-4">
                    <label>Class</label>
                  </div>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      onChange={selectHandler("grade")}
                      value={dropdownData.class || ""}
                    >
                      <option>select class</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <div className="col-sm-4">
                    <label>Chapter</label>
                  </div>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      onChange={selectHandler("chapter")}
                      value={dropdownData.chapter || ""}
                    >
                      <option>select Chapter</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <div className="form-group row mb-2">
                  <div className="col-sm-4">
                    <label>Topic</label>
                  </div>
                  <div className="col-sm-8">
                    <select
                      className="form-select"
                      onChange={selectHandler("topic")}
                      value={dropdownData.topic || ""}
                    >
                      <option>select video</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="card-footer text-center">
                <button className="btn btnclr m-2" onClick={resetData}>
                  Reset
                </button>
                <button className="btn  btnclr" onClick={submitData}>
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-8 bg-light rounded">
          <ul className="nav nav-tabs ">
            <li className="nav-item">
              <Link className="nav-link" to={"playlist"}>
                PlayLists <span className="count">{3054}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"practice"}>
                Practice Quizzes <span className="count">{1807}</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={"videos"}>
                videos <span className="count">{7051}</span>
              </Link>
            </li>
            <li className="d-none d-md-block d-sm-none">
              <div className="input-group mb-2">
                <input type="text" className="form-control" />
                <div className="input-group-prepend btnclr">
                  <div className="input-group-text btnclr">Search</div>
                </div>
              </div>
            </li>
          </ul>

          <Outlet context={filterData} />
        </div>
      </div>
    </div>
  );
}

export default Contents;
