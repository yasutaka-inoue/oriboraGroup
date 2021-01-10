import React, { useState } from 'react'
import { Backdrop, Button, Fade, Modal } from '@material-ui/core';
import ModalItem from "../../common/ModalItem";
import { makeStyles } from '@material-ui/core/styles';

// style
const useStyles = makeStyles((theme) => ({
      modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      button: {
          display: "block",
          margin: "0 auto",
          marginBottom: 30,
      }
  }));

const Rikkouho = ({id, guest_id, myId}) => {
    const classes = useStyles();

    const [open, setOpen] = useState(false);
    //modal処理
    const handleClose = () => {
        setOpen(false);
    };
    const handleOpen = () => {
        setOpen(true);
      };
    
    // 登録処理
    const onSubmit = () => {
        // ここに書く
        // (1)escortsのrikkouho_idの中の配列に（myid）を追加して更新
        
        // (2)guestのお知らせに「nicknameさんがidのリクエストに立候補しました」と追加される。

        setOpen(false);
    };
    
    return (
        <>
            <Button variant="contained" color="secondary" size="large" onClick={handleOpen} className={classes.button}>
                ボランティアに立候補する
            </Button>

            {/* modal */}
            <Modal
              aria-labelledby="transition-modal-title"
              aria-describedby="transition-modal-description"
              className={classes.modal}
              open={open}
              onClose={handleClose}
              closeAfterTransition
              BackdropComponent={Backdrop}
              BackdropProps={{
              timeout: 500,
              }}
            >
            <Fade in={open}>
                <ModalItem
                    title="ボランティア立候補"
                    text="このボランティアに立候補しますか？"
                    buttonText="立候補する"
                    handleClose={handleClose}
                    onSubmit={onSubmit}
                    />
            </Fade>
            </Modal>
        </>
    )
}

export default Rikkouho
