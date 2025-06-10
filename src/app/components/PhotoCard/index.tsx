export default function PhotoCard() {
    return (
      <div className="photo-card">
        <ul>
            <li>
                <img src="/foto-1.jpg" alt="Foto 1" />
            </li>
            <li>
                <img src="/foto-3.jpg" alt="Foto 2" />
            </li>
            <li>
                <img src="/foto-2.jpg" alt="Foto 3" />
            </li>
        </ul>
  
        <style jsx>{`
          .photo-card {
            width: 100%;
            height: 100%;
            position: relative;
            min-height: 400px;
            margin: 0.5rem 0;
          }

          ul {
            list-style: none;
            padding: 0;
            margin: 0;
            position: relative;
            width: 100%;
            height: 100%;
          }
          
          li {
            position: absolute;
            width: 320px;
            height: 335px;
            z-index: 1;
            border-radius: 2rem;
            overflow: hidden;
            border: 5px solid #fff;
            border-bottom: 40px solid #fff;
            transform: rotate(var(--rotation));
            transition: all 0.3s ease;
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          }

          li:nth-child(1) {
            --rotation: -30deg;
            left: -50px;
          }

          li:nth-child(2) {
            --rotation: 0deg;
            left: 200px;
            z-index: 2;
          }

          li:nth-child(3) {
            --rotation: 30deg;
            left: 460px;
          }
        
          img {
            width: 100%;
            height: 340px;
            object-fit: cover;
          }

          @media (max-width: 768px) {
            .photo-card {
              min-height: 350px;
            }

            li {
              width: 280px;
              height: 295px;
            }

            li:nth-child(1) {
              left: -30px;
            }

            li:nth-child(2) {
              left: 150px;
            }

            li:nth-child(3) {
              left: 330px;
            }

            img {
              height: 300px;
            }
          }

          @media (max-width: 480px) {
            .photo-card {
              min-height: 300px;
            }

            li {
              width: 220px;
              height: 235px;
            }

            li:nth-child(1) {
              left: -20px;
              --rotation: -20deg;
            }

            li:nth-child(2) {
              left: 100px;
              --rotation: 0deg;
            }

            li:nth-child(3) {
              left: 220px;
              --rotation: 20deg;
            }

            img {
              height: 240px;
            }
          }

          @media (max-width: 360px) {
            .photo-card {
              min-height: 250px;
            }

            li {
              width: 180px;
              height: 195px;
            }

            li:nth-child(1) {
              left: -15px;
              --rotation: -15deg;
            }

            li:nth-child(2) {
              left: 80px;
              --rotation: 0deg;
            }

            li:nth-child(3) {
              left: 175px;
              --rotation: 15deg;
            }

            img {
              height: 200px;
            }
          }
        `}</style>
      </div>
    );
  }