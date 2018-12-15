/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.note.controllers;

import hu.elte.note.entities.Label;
import hu.elte.note.entities.Note;
import hu.elte.note.entities.NoteGroup;
import hu.elte.note.entities.User;
import hu.elte.note.repositories.GroupRepository;
import hu.elte.note.repositories.LabelRepository;
import hu.elte.note.repositories.NoteRepository;
import hu.elte.note.security.AuthenticatedUser;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author András
 */
@RestController
@RequestMapping("/notes")
@CrossOrigin(origins="*", maxAge=3600)
public class NoteController {
    
    @Autowired
    private NoteRepository noteRepository;
    
    @Autowired
    private GroupRepository groupRepository;
    
    @Autowired
    private LabelRepository labelRepository;
    
    @Autowired
    private AuthenticatedUser authenticatedUser;
    
    
    @GetMapping("")
    public ResponseEntity<Iterable<Note>> getAll() {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role.equals(User.Role.ROLE_ADMIN)) {
            return ResponseEntity.ok(noteRepository.findAll());
        }else {
            return ResponseEntity.ok(noteRepository.findAll());
            //List<NoteGroup> userGroups = user.getNoteGroups();
          //  NoteGroup a = userGroups.get(0);
            /*List<Note> userNotes = new LinkedList<Note>();
            for(NoteGroup g : userGroups){
                List<Note> notes = g.getNotes();
                userNotes.addAll(notes);   
            }*/
            //return ResponseEntity.ok(noteRepository.findAll());
            //return ResponseEntity.ok(noteRepository.findAllByNoteGroup(a));
        }
        
    }
    
    @GetMapping("/{id}")
    public ResponseEntity<Note> get(@PathVariable Integer id) {
        Optional<Note> note = noteRepository.findById(id);
        if (note.isPresent()) {
            return ResponseEntity.ok(note.get());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    /*
    @PostMapping("")
    public ResponseEntity<Note> post(@RequestBody Note note) {
        Note savedNote = noteRepository.save(note);
        return ResponseEntity.ok(savedNote);
    }
    */
    @PutMapping("/{id}")
    public ResponseEntity<Note> update
            (@PathVariable Integer id,
             @RequestBody Note note) {
        Optional<Note> oNote = noteRepository.findById(id);
        if (oNote.isPresent()) {
            note.setNoteId(id);
            return ResponseEntity.ok(noteRepository.save(note));
        } else {
            return ResponseEntity.notFound().build();
        }
    }
        
    @DeleteMapping("/{id}")
    public ResponseEntity<Note> delete
            (@PathVariable Integer id) {
        Optional<Note> oNote = noteRepository.findById(id);
        if (oNote.isPresent()) {
            noteRepository.deleteById(id);
            return ResponseEntity.ok().build();
        } else {
            return ResponseEntity.notFound().build();
        }
    }
            
    @GetMapping("/{id}/labels")
    public ResponseEntity<List<Label>> labels
        (@PathVariable Integer id) {
        Optional<Note> oNote = noteRepository.findById(id);
        if (oNote.isPresent()) {
            return ResponseEntity.ok(oNote.get().getLabels());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/{id}/labels")
    public ResponseEntity<Label> insertLabel
        (@PathVariable Integer id, 
         @RequestBody Label label) {
        Optional<Note> oNote = noteRepository.findById(id);
        if (oNote.isPresent()) {
            Note note = oNote.get();
            Label newLabel = labelRepository.save(label);
            note.getLabels().add(newLabel);
            noteRepository.save(note);
            return ResponseEntity.ok(newLabel);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
   
    @PutMapping("/{id}/labels")
    public ResponseEntity<Iterable<Label>> modifyLabels
        (@PathVariable Integer id,
         @RequestBody List<Label> labels) {
        Optional<Note> oNote = noteRepository.findById(id);
        if (oNote.isPresent()) {
            Note note = oNote.get();
            
            for (Label label: labels) {
                if (label.getLabelId() == null) {
                    labelRepository.save(label);
                }
            }
            note.setLabels(labels);
            noteRepository.save(note);
            return ResponseEntity.ok(labels);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
     /*   
    @GetMapping("/{id}/notegroup")
    public ResponseEntity<NoteGroup> noteGroup
        (@PathVariable Integer id) {
        Optional<Note> oNote = noteRepository.findById(id);
        if (oNote.isPresent()) {
            return ResponseEntity.ok(oNote.get().getNoteGroup());
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PutMapping("/{id}/notegroup")
    public ResponseEntity<NoteGroup> modifyNoteGroup
        (@PathVariable Integer id,
         @RequestBody NoteGroup noteGroup) {
        Optional<Note> oNote = noteRepository.findById(id);
        if (oNote.isPresent()) {
            Note note = oNote.get();
            note.setNoteGroup(noteGroup);
            noteRepository.save(note);
            return ResponseEntity.ok(noteGroup);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    */
}
