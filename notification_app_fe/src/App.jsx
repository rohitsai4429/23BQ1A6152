import { useEffect, useState } from "react";

function App() {
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/notifications")
      .then((res) => res.json())
      .then((data) => setNotifications(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f4f6f8",
        padding: "30px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            color: "#1976d2",
            marginBottom: "30px",
          }}
        >
          Notification System
        </h1>

        {notifications.length === 0 ? (
          <p>No notifications found.</p>
        ) : (
          notifications.map((item) => (
            <div
              key={item.id}
              style={{
                background: "white",
                padding: "20px",
                marginBottom: "15px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              }}
            >
              <h3 style={{ margin: 0, color: "#333" }}>
                {item.title || "Untitled Notification"}
              </h3>

              <p
                style={{
                  marginTop: "10px",
                  color: "#666",
                }}
              >
                {item.message || "No message available"}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default App;