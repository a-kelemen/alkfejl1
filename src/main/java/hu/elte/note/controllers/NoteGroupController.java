/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.note.controllers;

/**
 *
 * @author Mad
 */

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import hu.elte.note.repositories.GroupRepository;
//import hu.elte.note.repositories.NoteRepository;
import hu.elte.note.entities.NoteGroup;
import hu.elte.note.entities.User;
import hu.elte.note.entities.Note;
//import hu.elte.note.security.AuthenticatedUser;
import java.util.Optional;


@RestController
@RequestMapping("/notegroups")
public class NoteGroupController {
    
    @Autowired
    private GroupRepository noteGroupRepository;
    
    //@Autowired
    //private AuthenticatedUser authenticatedUser;
    
    //@Autowired
    //private NoteRepository noteRepository;
    
    @GetMapping("")
    public ResponseEntity<Iterable<NoteGroup>> getAll() {
        //User user = authenticatedUser.getUser();
        //User.Role role = user.getRole();
        //if (role.equals(User.Role.ROLE_ADMIN)) {
            return ResponseEntity.ok(noteGroupRepository.findAll());
        //}
        //else
        //{
        //    return ResponseEntity.ok(noteGroupRepository.findAllByUser(user));
        //}
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<NoteGroup> get(@PathVariable Integer id)
    {
        Optional<NoteGroup> group = noteGroupRepository.findById(id);
        if (group.isPresent())
        {
            return ResponseEntity.ok(group.get());
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("")
    public ResponseEntity<NoteGroup> post(@RequestBody NoteGroup noteGroup)
    {
        //User user = authenticatedUser.getUser();
        //group.setUser(user);
        NoteGroup savedGroup = noteGroupRepository.save(noteGroup);
        return ResponseEntity.ok(savedGroup);
    }
    
    @PutMapping("/{id}")
    public ResponseEntity<NoteGroup> update(@PathVariable Integer id, @RequestBody NoteGroup noteGroup)
    {
        Optional<NoteGroup> oGroup = noteGroupRepository.findById(id);
        if (oGroup.isPresent())
        {
            noteGroup.setGroupId(id);
            return ResponseEntity.ok(noteGroupRepository.save(noteGroup));
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
    
    @DeleteMapping("/{id}")
    public ResponseEntity<NoteGroup> delete(@PathVariable Integer id)
    {
        Optional<NoteGroup> oGroup = noteGroupRepository.findById(id);
        if (oGroup.isPresent())
        {
            noteGroupRepository.deleteById(id);
            return ResponseEntity.ok().build();
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
    
    /*@GetMapping("/{id}/notes")
    public ResponseEntity<Iterable<Note>> getNote(@PathVariable Integer id)
    {
        Optional<NoteGroup> noteGroup = noteGroupRepository.findById(id);
        if (noteGroup.isPresent())
        {
            return ResponseEntity.ok(noteGroup.get().getNotes());
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/{id}/notes")
    public ResponseEntity<Note> newNote(@PathVariable Integer id, @RequestBody Note note)
    {
        Optional<NoteGroup> oNoteGroup = noteGroupRepository.findById(id);
        if (oNoteGroup.isPresent())
        {
            noteRepository.
        }
    }
*/
}
