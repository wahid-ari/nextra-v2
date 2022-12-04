import { Sandpack } from "@codesandbox/sandpack-react";
import { sandpackDark } from "@codesandbox/sandpack-themes";

const badgeComponent = `export default function Badge({ variant, children }) {
  return (
    variant === "success" ?
      <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded bg-green-200 text-green-600">
        {children}
      </span>
    : variant === "danger" ?
      <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded bg-red-200 text-red-600">
        {children}
      </span>
    : variant === "warning" ?
      <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded bg-yellow-200 text-yellow-600">
        {children}
      </span>
    : variant === "info" ?
      <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded bg-orange-200 text-orange-600">
        {children}
      </span>
    : <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded bg-blue-200 text-blue-600">
        {children}
      </span>
  )
}`

const badgeOutlineComponent = `export default function BadgeOutline({ variant, children }) {
  return (
    variant === "success" ?
      <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded text-green-500 border border-green-500">
        {children}
      </span>
    : variant === "danger" ?
      <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded text-red-500 border border-red-500">
        {children}
      </span>
    : variant === "warning" ?
      <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded text-yellow-500 border border-yellow-500">
        {children}
      </span>
    : variant === "info" ?
      <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded text-orange-500 border border-orange-500">
        {children}
      </span>
    : <span className="text-sm font-medium mr-2 px-1.5 py-0.5 rounded text-blue-500 border border-blue-500">
        {children}
      </span>
  )
}`

const badgeCode = `import Badge from './Badge'
import BadgeOutline from './BadgeOutline'

export default function App() {
  return (
    <main className="bg-neutral-50">
      <div className="m-8">
        <h1 className="text-2xl font-bold mb-4 text-neutral-900">Hello Sandpack</h1>
        
        <div className="flex flex-wrap gap-y-2 mb-6">
          <Badge>default</Badge>
          <Badge variant="success">success</Badge>
          <Badge variant="danger">danger</Badge>
          <Badge variant="warning">warning</Badge>
          <Badge variant="info">info</Badge>
        </div>
        
        <div className="flex flex-wrap gap-y-2 mb-6">
          <BadgeOutline>default</BadgeOutline>
          <BadgeOutline variant="success">success</BadgeOutline>
          <BadgeOutline variant="danger">danger</BadgeOutline>
          <BadgeOutline variant="warning">warning</BadgeOutline>
          <BadgeOutline variant="info">info</BadgeOutline>
        </div>

      </div>
    </main>
  )
}`;

export default function Code() {
  return (
    <Sandpack
      // You can change these examples!
      // Try uncommenting any of these lines
      theme="dark"
      template="react"
    />
  );
}

export function BadgeCode() {
  return (
    <Sandpack
      // You can change these examples!
      // Try uncommenting any of these lines
      theme={sandpackDark}
      template="react"
      files={{
        "/App.js": badgeCode,
        "/Badge.js": {
          code: badgeComponent,
          // readOnly: true
        },
        "/BadgeOutline.js": {
          code: badgeOutlineComponent,
          // readOnly: true
        }
      }}
      options={{
        externalResources: [
          "https://cdn.tailwindcss.com",
        ],
        // showLineNumbers: false, // default - true
        showInlineErrors: true, // default - false
        // wrapContent: true, // default - false
        editorHeight: 450, // default - 300
        // editorWidthPercentage: 60, // default - 50
        showNavigator: true, // default - false
        autorun: false, // default - true
        // showConsole: true, // default - false
        // showConsoleButton: true // default - false
      }}
    />
  );
}

