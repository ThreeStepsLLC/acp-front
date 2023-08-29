import Layout from '@/components/layout';
import PageHeader from '@/components/lib/PageHeader/PageHeader';
import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Modal from 'react-modal';
import { useTranslation } from 'react-i18next';
import { getLicenses } from '@/services/services';

const Licences = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');
  const [data, setData] = useState([])
  const { t } = useTranslation("licences");

  const getAllLicenes = () => {
    getLicenses().then((res) => {
      setData(res.data)
    })
  }

  useEffect(() => {
    getAllLicenes()
  }, [])

  const openModal = (imageSrc: any) => {
    setSelectedImage(imageSrc);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setSelectedImage('');
    setModalIsOpen(false);
  };

  return (
    <Layout title="Licences">
      <PageHeader title={t('licences')} subTitle={t('ourLicences')} />
      <div className="container mx-auto px-16 py-16 lg:flex md:flex lg:justify-start md:justify-start justify-center grid gap-10">
        <Image
          src={'/ACP Engineering 9001 2023-1.jpg'}
          alt={'iso'}
          width={200}
          height={200}
          onClick={() => openModal('/ACP Engineering 9001 2023-1.jpg')}
          className="clickable-image"
          style={{cursor: 'pointer'}}
        />
        <Image
          src={'/ACP Engineering 14001 2023-2.jpg'}
          alt={'iso'}
          width={200}
          height={200}
          onClick={() => openModal('/ACP Engineering 14001 2023-2.jpg')}
          className="clickable-image"
          style={{cursor: 'pointer'}}
        />
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="image-modal"
        style={{
          content: {
            maxWidth: '400px',
            margin: 'auto',
            marginTop: '20px',
            border: '0px'
          }
        }}
      >
        {selectedImage && (
          <Image src={selectedImage} alt="iso" width={800} height={800} />
        )}
      </Modal>
    </Layout>
  );
};

export default Licences;
