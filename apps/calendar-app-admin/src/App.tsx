import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { EntryTypeList } from "./entryType/EntryTypeList";
import { EntryTypeCreate } from "./entryType/EntryTypeCreate";
import { EntryTypeEdit } from "./entryType/EntryTypeEdit";
import { EntryTypeShow } from "./entryType/EntryTypeShow";
import { TimeEntryList } from "./timeEntry/TimeEntryList";
import { TimeEntryCreate } from "./timeEntry/TimeEntryCreate";
import { TimeEntryEdit } from "./timeEntry/TimeEntryEdit";
import { TimeEntryShow } from "./timeEntry/TimeEntryShow";
import { CalendarList } from "./calendar/CalendarList";
import { CalendarCreate } from "./calendar/CalendarCreate";
import { CalendarEdit } from "./calendar/CalendarEdit";
import { CalendarShow } from "./calendar/CalendarShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"CalendarApp"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="EntryType"
          list={EntryTypeList}
          edit={EntryTypeEdit}
          create={EntryTypeCreate}
          show={EntryTypeShow}
        />
        <Resource
          name="TimeEntry"
          list={TimeEntryList}
          edit={TimeEntryEdit}
          create={TimeEntryCreate}
          show={TimeEntryShow}
        />
        <Resource
          name="Calendar"
          list={CalendarList}
          edit={CalendarEdit}
          create={CalendarCreate}
          show={CalendarShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
