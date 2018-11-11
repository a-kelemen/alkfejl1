/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.note.repositories;

import hu.elte.note.entities.Note;
import hu.elte.note.entities.NoteGroup;
import hu.elte.note.entities.User;
import java.util.Optional;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

/**
 *
 * @author András
 */
@Repository
public interface NoteRepository extends CrudRepository<Note, Integer>{
    public Iterable<Note> findAllByNoteGroup(NoteGroup group);
}
