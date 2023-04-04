import { WithAuthenticatorProps, withAuthenticator } from "@aws-amplify/ui-react";

export function getServerSideProps() {
  const renderedAt = new Date();
  const formattedBuildDate = renderedAt.toLocaleDateString("en-US", {
    dateStyle: "long",
  });
  const formattedBuildTime = renderedAt.toLocaleTimeString("en-US", {
    timeStyle: "long",
  });
  return {
    props: {
      renderedAt: `${formattedBuildDate} at ${formattedBuildTime}`,
    },
  };
}

function Home(props: WithAuthenticatorProps) {
  return (
    <div style={{ padding: 50 }}>
      <h1>Logged in as {props.user?.username}.</h1>
      <div>
        <button onClick={props.signOut}>Sign out</button>
      </div>
      <p>This page was server-side rendered on {undefined}.</p>
    </div>
  );
}

export default withAuthenticator(Home);