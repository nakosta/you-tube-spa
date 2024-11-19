import React, { useEffect } from "react";

const withLogger = (WrappedComponent) => {
  return (props) => {
    useEffect(() => {
      console.log(`Компонент ${WrappedComponent.name} был смонтирован.`);

      return () => {
        console.log(`Компонент ${WrappedComponent.name} был размонтирован.`);
      };
    }, []);

    const handleUserAction = (actionType, task) => {
      console.log(`Действие: ${actionType}`, task);
    };

    return <WrappedComponent {...props} logAction={handleUserAction} />;
  };
};

export default withLogger;
