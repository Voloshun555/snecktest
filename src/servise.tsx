export function handlePlayerNameSubmit(name: string) {
  fetch("http://localhost:8080/api/user", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name }),
  })
    .then((response) => {
      if (response.ok) {
        console.log("Имя игрока успешно отправлено на сервер");
      } else {
        console.error("Не удалось отправить имя игрока на сервер");
      }
    })
    .catch((error) => {
      console.error("Ошибка при отправке имени игрока:", error);
    });
}
