import type { LessonBlock } from "../types";


type Props = {
  blocks: LessonBlock[];
};


export default function LessonRenderer({ blocks }: Props) {
  return (
    <div className="stack">
      {blocks.map((block, index) => {
        if (block.type === "callout") {
          return null;
        }

        if (block.type === "objective-list" || block.type === "concept-card-grid") {
          return (
            <section className="panel" key={`${block.type}-${index}`}>
              {block.title ? <h3>{block.title}</h3> : null}
              <div className="grid-cards">
                {block.items?.map((item, itemIndex) => (
                  <article className="mini-card" key={`${item.label}-${itemIndex}`}>
                    <strong>{item.label ?? item.feature ?? `Item ${itemIndex + 1}`}</strong>
                    <p>{item.description ?? item.traditional ?? item.value ?? ""}</p>
                    {item.ai ? <p className="muted">AI: {item.ai}</p> : null}
                  </article>
                ))}
              </div>
            </section>
          );
        }

        if (block.type === "table") {
          return (
            <section className="panel" key={`${block.type}-${index}`}>
              {block.title ? <h3>{block.title}</h3> : null}
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      {Object.keys(block.items?.[0] ?? {}).map((key) => (
                        <th key={key}>{key}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.items?.map((item, rowIndex) => (
                      <tr key={rowIndex}>
                        {Object.values(item).map((value, cellIndex) => (
                          <td key={cellIndex}>{value}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          );
        }

        return (
          <section className={`panel panel-${block.type}`} key={`${block.type}-${index}`}>
            {block.title ? <h3>{block.title}</h3> : null}
            {block.content ? <p>{block.content}</p> : null}
          </section>
        );
      })}
    </div>
  );
}
