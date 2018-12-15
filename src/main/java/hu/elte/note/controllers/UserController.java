/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hu.elte.note.controllers;

import org.springframework.http.ResponseEntity;
import java.util.Optional;
import hu.elte.note.entities.User;
import hu.elte.note.entities.User.Role;
import hu.elte.note.repositories.UserRepository;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import hu.elte.note.security.AuthenticatedUser;
import org.springframework.web.bind.annotation.CrossOrigin;



/**
 *
 * @author Mad
 */

@RestController
@RequestMapping("/users")
@CrossOrigin(origins="*", maxAge=3600)
public class UserController {
    
    @Autowired
    private BCryptPasswordEncoder passwordEncoder;
    
    @Autowired
    private UserRepository userRepository;
    
    @Autowired
    private AuthenticatedUser authenticatedUser;
    
    @PostMapping("register")
    public ResponseEntity<User> register(@RequestBody User user) {
        Optional<User> oUser = userRepository.findByUsername(user.getUsername());
        if (oUser.isPresent()) {
            return ResponseEntity.badRequest().build();
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setPassword(user.getPassword());
        user.setEmailAddress(user.getEmailAddress());
        user.setEnabled(true);
        user.setRole(User.Role.ROLE_USER);
        return ResponseEntity.ok(userRepository.save(user));
    }
    
    @PostMapping("login")
    public ResponseEntity login(@RequestBody User user){
            return ResponseEntity.ok().build();
    }
    
    @GetMapping("")
    public ResponseEntity getAll()
    {
        User user = authenticatedUser.getUser();
        User.Role role = user.getRole();
        if (role == Role.ROLE_ADMIN)
        {
            return ResponseEntity.ok(userRepository.findAll());    
        }
        else
        {
            return ResponseEntity.notFound().build();
        }
        
    }
    
    @GetMapping("/{id}")
    public ResponseEntity getById(@PathVariable Integer id)
    {
        User authUser = authenticatedUser.getUser();
        User.Role role = authUser.getRole();
        if (role == Role.ROLE_ADMIN)
        {
            Optional<User> user = userRepository.findById(id);
            if (user.isPresent())
            {
                return ResponseEntity.ok(user.get());
            }
            else
            {
                return ResponseEntity.notFound().build();
            }
        }
        else {
            return ResponseEntity.notFound().build();
        }
    }
}
