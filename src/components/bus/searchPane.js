import { DatePicker, Select, Checkbox, Pagination } from "antd";
import { useState } from "react";
import DebounceSelect from "../form/debounceSelect";
import styles from "./searchPane.module.scss";

async function fetchUserList(username) {
  console.log("fetching user", username);
  return fetch("https://randomuser.me/api/?results=5")
    .then((response) => response.json())
    .then((body) =>
      body.results.map((user) => ({
        label: `${user.name.first} ${user.name.last}`,
        value: user.login.username,
      }))
    );
}

const { Option } = Select;

const options = [
  { label: 'Apple', value: 'Apple' },
  { label: 'Pear', value: 'Pear' },
  { label: 'Orange', value: 'Orange' },
];

export default function SearchPane() {
  const [value, setValue] = useState([]);

  return (
    <div className={styles.searchPane}>
      <div className="searchForm">
        <DebounceSelect
          value={value}
          placeholder="Select users"
          fetchOptions={fetchUserList}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          style={{
            width: "100%",
          }}
        />

        <DebounceSelect
          value={value}
          placeholder="Select users"
          fetchOptions={fetchUserList}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          style={{
            width: "100%",
          }}
        />
        <DatePicker
          dateRender={(current) => {
            const style = { width: "50px" };

            return (
              <div className="ant-picker-cell-inner" style={style}>
                {current.date()}
              </div>
            );
          }}
        />

        <div>
          <Checkbox>I agree to Term & Conditions</Checkbox>
        </div>

        <div>
          <Checkbox.Group options={options} defaultValue={['Pear']} />
        </div>

        <div>
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
    </div>
  );
}
