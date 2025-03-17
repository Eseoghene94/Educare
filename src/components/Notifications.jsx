// components/Notifications.js
import React from "react";

function Notifications() {
  return (
    <div className="fixed bottom-4 right-4 bg-white p-4 rounded-lg shadow-lg">
      <h3 className="text-lg font-bold">Notifications</h3>
      <ul className="mt-2">
        <li>New course available: Advanced UI/UX Design</li>
        <li>Your subscription is about to expire.</li>
      </ul>
    </div>
  );
}

export default Notifications;
