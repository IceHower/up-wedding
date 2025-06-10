// components/FileList.js
export default function FileList({ files }: any) {
    if (files.length === 0) return null;
  
    return (
      <div className="file-list">
        <h2>Fotos Enviadas</h2>
        <ul>
          {files.map((file: any, index: any) => (
            <li key={index}>
              <a 
                href={file.webViewLink} 
                target="_blank" 
                rel="noopener noreferrer"
              >
                {file.name}
              </a>
              <span>{new Date(file.createdTime).toLocaleDateString()}</span>
            </li>
          ))}
        </ul>
  
        <style jsx>{`
          .file-list {
            margin-top: 2rem;
          }
          
          h2 {
            color: #333;
            margin-bottom: 1rem;
            font-size: 1.2rem;
          }
          
          ul {
            list-style: none;
            padding: 0;
            display: grid;
            gap: 0.5rem;
          }
          
          li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0.5rem;
            background-color: #f9f9f9;
            border-radius: 4px;
          }
          
          a {
            color: #2196F3;
            text-decoration: none;
            word-break: break-all;
          }
          
          span {
            color: #666;
            font-size: 0.8rem;
            white-space: nowrap;
            margin-left: 1rem;
          }
        `}</style>
      </div>
    );
  }