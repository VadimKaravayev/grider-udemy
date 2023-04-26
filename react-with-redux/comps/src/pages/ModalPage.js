import { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handleClick = () => setShowModal(true);
  const handleClose = () => setShowModal(false);
  return (
    <div>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque a quam
        lobortis, feugiat elit non, rhoncus ante. Phasellus at pretium nunc.
        Duis lobortis elit eu dictum iaculis. Phasellus ut ligula consectetur,
        tincidunt lacus molestie, tristique leo. Maecenas eros purus, volutpat
        ultricies dignissim ac, sollicitudin at dolor. Sed luctus mauris odio,
        ut interdum purus varius ac. Cras ornare, ante in pretium egestas, diam
        sapien ornare dolor, nec ornare ligula odio non felis. Cras ullamcorper
        suscipit mauris eget lacinia. Nulla efficitur sapien elit, quis iaculis
        tellus suscipit nec. Morbi semper, urna non blandit pharetra, risus quam
        cursus nunc, non tincidunt felis metus at mauris. Nulla pretium dolor id
        lectus vulputate pretium. In imperdiet aliquet nisi sed tincidunt.
        Aenean dignissim turpis non nibh vestibulum, ut posuere nulla mollis.
        Pellentesque quis tristique massa, at rhoncus tortor. Donec egestas
        libero ut sapien aliquet, sit amet convallis turpis vulputate. Integer
        nec ligula facilisis orci accumsan tristique a ac lectus. Praesent
        cursus risus eget ex pharetra, ac vulputate dui bibendum. Suspendisse a
        urna ligula. Nunc eget mi ut augue eleifend elementum at nec magna.
        Nulla elementum tristique pellentesque. Phasellus sollicitudin arcu non
        leo congue aliquet. Morbi posuere erat mauris, id pulvinar enim
        ullamcorper ac. Nulla fringilla semper felis. Duis auctor volutpat
        rutrum. Etiam pretium vehicula luctus. Sed quis est gravida, sagittis
        dolor tristique, consequat lorem. Aenean semper lectus non risus
        ultrices, commodo fringilla mauris pharetra. Nunc nec orci vel erat
        laoreet tempor. Maecenas magna velit, pharetra ac mauris sed, gravida
        consequat tortor. Morbi id aliquam leo. Ut laoreet dictum ante, ac
        suscipit augue mattis non. Morbi vel libero ut velit dapibus ultricies
        condimentum at neque. Vivamus luctus odio vitae lorem cursus, nec
        aliquet neque imperdiet. Mauris eros ligula, consectetur sit amet
        maximus vel, bibendum eu mi. Aliquam faucibus erat a arcu accumsan
        egestas. Sed sodales bibendum risus, in lobortis sapien condimentum sit
        amet. Cras et eleifend nunc. Etiam ac dui porttitor, semper metus sit
        amet, semper enim. Donec dolor diam, pretium sed nunc at, rhoncus
        vulputate ex. Curabitur fermentum, ex ac mattis rutrum, dui ipsum
        fermentum mi, et ultricies ligula sem eget diam. Vivamus volutpat
        malesuada pharetra. Vestibulum ante ipsum primis in faucibus orci luctus
        et ultrices posuere cubilia curae; Nulla facilisi. In at elit eget elit
        vulputate varius. Fusce ac vulputate nibh. Suspendisse tristique eu
        libero sed sollicitudin. Integer convallis laoreet purus, et tincidunt
        nibh vehicula et. Phasellus ultrices eget eros sit amet lacinia.
        Pellentesque cursus purus eros, a eleifend velit scelerisque in. Morbi
        ornare nisi purus. In mattis dolor vel lorem rhoncus, id hendrerit urna
        vestibulum. Pellentesque habitant morbi tristique senectus et netus et
        malesuada fames ac turpis egestas. Nunc a semper eros. Fusce pulvinar
        convallis dolor, a venenatis enim varius at. Donec vulputate euismod
        velit cursus efficitur. Nulla eu lacinia felis, et scelerisque eros.
        Curabitur eget lacinia sem. Proin laoreet, purus sit amet volutpat
        suscipit, tortor purus mattis neque, ac facilisis eros lorem vitae leo.
      </p>
      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && (
        <Modal
          onClose={handleClose}
          actionBar={
            <Button primary onClick={handleClose}>
              I Accept
            </Button>
          }
        >
          <p>Here is an important agreent for you to accept</p>
        </Modal>
      )}
    </div>
  );
}

export default ModalPage;
