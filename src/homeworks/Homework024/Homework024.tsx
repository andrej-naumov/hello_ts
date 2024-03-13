import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { EmployeeWrapper } from "./styles";
import { Employee } from "./employee";
import SubmitButton from "components/SubmitButton/SubmitButton";

const getRandomEmployeeId = () => {
  return Math.floor(Math.random() * 10) + 1;
}; // 1 - 10



function Homework024() {
  const [employee, setEmployee] = useState<Employee | null>(null);
  const [errMsg, setErrMsg] = useState<string>("");

  useEffect(() => {
    fetchData(setEmployee, setErrMsg);
  }, []); // Пустой массив зависимостей, чтобы запрос выполнялся только один раз при монтировании компонента

  return (
    <>
      {errMsg && <div>{errMsg}</div>}
      <SubmitButton value={"button"} onClick={() => fetchData(setEmployee, setErrMsg)}></SubmitButton>
      {employee && (
        <>
          <EmployeeWrapper>
            <div>
              <p>{employee.firstName} {employee.lastName}</p>
              <p>{employee.commentary}</p>
            </div>
            {/* Другие данные о сотруднике */}
          </EmployeeWrapper>
          
        </>
      )}
    </>
  );
}

export default Homework024;


const fetchData = async (setEmployee: React.Dispatch<React.SetStateAction<Employee | null>>, setErrMsg: React.Dispatch<React.SetStateAction<string>>) => {
    try {
      const response = await fetch(
        "https://api.thriving-coders.com/employees/" + getRandomEmployeeId()
      );
  
      if (!response.ok) {
        throw new Error("Failed to fetch employee data");
      }
  
      const responseData = await response.json();
  
      if (
        responseData.messageLevel === "INFO" &&
        responseData.message === "Employee not found!"
      ) {
        setErrMsg("Employee not found!");
        setEmployee(null);
      } else {
        setErrMsg("no error detected");
        setEmployee(responseData);
      }
    } catch (error) {
      setErrMsg("Error fetching employee data");
      console.error("Error fetching employee data:", error);
    }
  };

