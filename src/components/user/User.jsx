import { Paragraf, Span } from './user.styled';

export const User = ({ user: { name, email, id }, deleteUser }) => {
  const c = email.endsWith('biz');
  return (
    <>
      <Paragraf>
        name: <Span>{name}</Span>
      </Paragraf>
      <Paragraf>
        email: <Span isRed={c}>{email}</Span>
      </Paragraf>
      <button
        type="button"
        onClick={() => {
          deleteUser(id);
        }}
      >
        Delete
      </button>
    </>
  );
};
