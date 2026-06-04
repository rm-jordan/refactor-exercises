export type UserProfile = {
  id: string;
  displayName: string;
  email: string;
};

type ApiErrorBody = { message?: string };

export async function fetchUserProfile(
  userId: string,
  apiKey: string,
): Promise<UserProfile> {
  const base = "https://api.example.com";
  const url = base + "/v2/users/" + userId + "?fields=id,displayName,email";

  return fetch(url, {
    headers: {
      Authorization: "Bearer " + apiKey,
      Accept: "application/json",
    },
  }).then(async (res) => {
    if (!res.ok) {
      let msg = "Request failed with status " + res.status;
      try {
        const body = (await res.json()) as ApiErrorBody;
        if (body.message) {
          msg = body.message;
        }
      } catch {
        // ignore json parse errors
      }
      throw new Error(msg);
    }
    return res.json() as Promise<UserProfile>;
  });
}
