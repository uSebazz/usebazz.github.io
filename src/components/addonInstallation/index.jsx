
export default function AddonInstallSteps({ repoUrl, repoName, addonName, categories = [] }) {
  return (
  <ol>
    <li>
      <strong>Installing the repository</strong>:
      <ul>
        <li>Go to <code>Settings</code> &gt; <code>File Manager</code> &gt; <code>Add source</code></li>
        <li>
          Enter the URL of the repository (<code>{repoUrl}</code>) and give it a name (<code>{repoName}</code>).
        </li>
        <li>Go back to the main menu and select <code>Add-ons</code> &gt; <code>Install from zip file</code></li>
        <li>Select the repository you just added and install the zip file.</li>
      </ul>
    </li>
    <li>
      <strong>Installing the addon</strong>:
      <ul>
        <li>Go to <code>Add-ons</code> &gt; <code>Install from repository</code></li>
        {categories.length > 0 ? (
          <li>
            Navigate through the repository categories to find the addon. Look for:
            <ul>
              {categories.map((cat) => (
                <li key={cat}>{cat}</li>
              ))}
            </ul>
          </li>
        ) : (
          <li>Depending on the repository, you may need to navigate through different categories to find the addon.</li>
        )}
        <li>Select {addonName} and click <code>Install</code>.</li>
      </ul>
    </li>
  </ol>
);
}