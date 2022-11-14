import { useRef, useState } from "react";
import { useAddParticipantsToList } from "../../states/hooks/useAddParticipantsToList";
import { useGetErrorMessage } from "../../states/hooks/useGetErrorMessage";

export default function Form() {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const [name, setName] = useState("");

  const addParticipant = useAddParticipantsToList();
  const errorMessage = useGetErrorMessage();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    addParticipant(name);

    setName("");
    nameInputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={nameInputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        placeholder="Insira os nomes dos participantes"
      />
      <button disabled={!name}>Adicionar</button>
      {errorMessage && <p role="alert">{errorMessage}</p>}
    </form>
  );
}
