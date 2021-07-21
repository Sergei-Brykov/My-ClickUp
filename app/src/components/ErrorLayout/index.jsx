import { Layout } from "../Layout";

export function ErrorLayout({ error }) {
  return (
    <Layout>
      <div>{error}</div>
    </Layout>
  );
}
