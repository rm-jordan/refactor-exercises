export function UserCard(props: any) {
  return (
    <div data-testid="user-card">
      {props.user ? (
        props.user.active === true ? (
          <div>
            <h2>
              {props.user.firstName} {props.user.lastName}
            </h2>
            {props.showEmail === true && props.user.email ? (
              <p data-testid="email">{props.user.email}</p>
            ) : null}
            {props.showBadge === true ? (
              <span data-testid="badge">VIP</span>
            ) : null}
          </div>
        ) : (
          <p data-testid="inactive">Inactive user</p>
        )
      ) : (
        <p data-testid="empty">No user</p>
      )}
    </div>
  );
}
