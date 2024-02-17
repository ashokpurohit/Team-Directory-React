import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listTeamDirectoryAction } from "../redux/actions/teamDirectoryAction";
import TeamDirectory from "../components/TeamDirectory";

const HomeScreen = () => {
  const [adminTeamDirectory, setAdminTeamDiirectory] = useState([]);
  const [memberTeamDirectory, setMemberTeamDiirectory] = useState([]);

  const dispatch = useDispatch();

  const teamDirectoryList = useSelector((state) => state?.teamDirectory);
  const { loading, error, data } = teamDirectoryList;

  const { text: searchQuery } = useSelector((state) => state?.searchQuery);

  useEffect(() => {
    dispatch(listTeamDirectoryAction());
  }, []);

  useEffect(() => {
    if (data) {
      setAdminTeamDiirectory(data.filter((td) => td.role === "admin"));
      setMemberTeamDiirectory(data.filter((td) => td.role === "member"));
    }
    if (searchQuery) {
      setAdminTeamDiirectory(
        data.filter(
          ({ first_name, last_name, email, role }) =>
            role === "admin" &&
            (first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              email.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      );
      setMemberTeamDiirectory(
        data.filter(
          ({ first_name, last_name, email, role }) =>
            role === "member" &&
            (first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
              email.toLowerCase().includes(searchQuery.toLowerCase()))
        )
      );
    }
  }, [data, searchQuery]);
  return (
    <>
      {adminTeamDirectory.length ? (
        <TeamDirectory
          title="Administrators"
          teamDirectory={adminTeamDirectory}
        />
      ) : (
        <></>
      )}
      {memberTeamDirectory.length ? (
        <TeamDirectory title="Members" teamDirectory={memberTeamDirectory} />
      ) : (
        <></>
      )}
      {adminTeamDirectory.length === 0 && memberTeamDirectory.length === 0 ? (
        <div className="row p-3">
          <h4>No User Found</h4>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default HomeScreen;
