import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";
import Button from "../components/Button";

function ButtonPage() {
  return (
    <div>
      <div>
        <Button primary>
          <GoBell /> Click me
        </Button>
      </div>
      <div>
        <Button
          danger
          className="mb-2"
          onClick={() => console.log("danger button")}
        >
          <GoCloudDownload />
          Submit from
        </Button>
      </div>
      <div>
        <Button warning>
          <GoDatabase />
          Buy now
        </Button>
      </div>
      <div>
        <Button success outline>
          Go to success
        </Button>
      </div>
      <div>
        <Button secondary rounded outline>
          Hide ads
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
